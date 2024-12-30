const { isUtf8 } = require('buffer');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  maxHttpBufferSize: 1000e9
});
const fs = require('fs');
const path = require('path');
const https = require('https');
const { TIMEOUT } = require('dns');
let numKickAccepted = 0;
let numKickRejected = 0;
let onlineUsers = [];
let offlineUsers = [];
let offlineMessages = {}
let getUsersOnlineArray = [];
let bannedUsers = {};
let accountCreated = {}
let messages = [];

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/client.js', (req, res) => {
  res.sendFile(__dirname + '/client.js');
});

app.get('/moderatorPanel.html', (req, res) => {
  res.sendFile(__dirname + '/moderatorPanel.html');
});

let numUsers = 0;
const chatLogPath = path.join(__dirname, 'messages.txt');
//start of IO.on('connection')
io.on('connection', (socket) => {
  let fileToDownload = ""
  numUsers++;
  let date = new Date();
  console.log(`A user connected at ${date}. Total users: ${numUsers} with the id of ${socket.id}`);
  io.emit('user count', numUsers)

  socket.emit('IpAddressRequest')

  socket.on('kick-user', targetUsername => {
    socket.broadcast.emit('kick-user', targetUsername)
  console.log(targetUsername + ' has been kicked!')
})
socket.on("force disconnect", (targetUsername) => {
  io.emit('force disconnect broadcast alert message', targetUsername)
  socket.disconnect();
})

  socket.on('chat message', (msg, room, username, textColour, msgBoxColour) => {
    // Broadcast message to all clients except the one that sent it
    if(room == ''){
    console.log('msgBoxColour = '+ msgBoxColour)
    socket.broadcast.emit('chat message', msg, username, textColour, msgBoxColour);
    socket.broadcast.emit('new message notification', msg);
    console.log(msg)
    }
    else{
      socket.to(room).emit('chat message', msg); 
    }
    messages.push(msg);
  });
  fs.readFileSync('messages.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading chat log:', err);
    } else {
      io.emit('chat log', data);
    }
  });

  socket.on('join room', (room) => {
    socket.join(room);
    console.log(`User joined room ${room}`);
  })
  socket.on('leave room', (room) => {
    socket.leave(room);
  })

  socket.on('sender message', msg => {
    socket.to(socket.id).emit('sender message', msg)
  })
  //log the ip address to the console
  socket.on('publicIP', ip => console.log(ip))

  socket.on('send-file', (fileData) => {
    const { fileName, fileContent } = fileData;
    const filePath = path.join(__dirname, 'uploads', fileName);
  
    // Delete all files in the uploads directory
    fs.readdir(path.join(__dirname, '/uploads'), (err, files) => {
      // Decode the Base64 string to a Buffer
      const buffer = Buffer.from(fileContent, 'base64');
  
      // Write the file to the uploads directory
      fs.writeFile(filePath, buffer, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
          socket.emit('file-error', 'Error saving file');
        } else {
          console.log('File saved:', fileName);
          io.emit('file-received', {fileName, fileContent });
        }
      });
    });
  });

  let tempArray = []

  socket.on('disconnect', () => {
    let date = new Date()
    numUsers--;
    console.log(`User disconnected. Total users: ${numUsers}`);
    socket.broadcast.emit("disconnected", numUsers, date)
    io.emit("checkWhoIsOnline")
    io.emit('user count', numUsers)
  });
  socket.on('checkWhoIsOnline', (username) => {
    tempArray.push(username)
    let tempArray2 = [...new Set(tempArray)]
    onlineUsers = tempArray2;
    getUsersOnlineArray = onlineUsers;
    if(offlineMessages[username] == onlineUsers){
      delete offlineMessages[username]
    }
    socket.emit("updateOnlineUsers", onlineUsers)
    io.emit("updateOnlineUsers3", onlineUsers)
  })

  socket.on("file-messages", (fileName) => {
    fs.writeFile("fileMessages.txt", `${fileName} \n`, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        socket.emit("file-error", "Error saving file");
      }
    })
  })
  socket.on("userjoined", (username, time) => {
    socket.broadcast.emit("userjoined", username , time, socket.id)
    console.log(username + " has joined")
  })
  socket.emit('getName')

  socket.on('getName2', (username, id) => {
    socket.emit('nameAndId', username, id)
  })

  socket.on('get socketID', () =>{
    socket.emit("socket ID", socket.id)
  })

  socket.on('force chat', (msg, name) => {
    socket.broadcast.emit('force chat name check', msg, name)  
  })
  socket.on('chat message2', (msg) => {
    socket.broadcast.emit('chat message', msg)
  })
  socket.on('command', (command, username, adminPerm) => {
    console.log(command)
    let commandType = command.split(' ')[0]
    let usernameForVoteKick = command.split(' ').slice(1).join(" ")
    if(commandType == '/votekick'){
      socket.broadcast.emit('votekick', usernameForVoteKick)
      numKickAccepted = 0;
      numKickRejected = 0;
    }
    else if(commandType == '/joincustomroom'){
      let roomName = command.split(' ')[1]
      socket.emit("join room", roomName)
    }
    else if(commandType == '/leaveroom'){
      let roomName = command.split(' ')[1]
      socket.emit("leave room", roomName)
    }
    else if(commandType == '/mail'){
      let destinationUsername = command.split(' ')[1]
      let message = command.split(' ').slice(2).join(" ");
      if(!onlineUsers.includes(destinationUsername)){
        offlineUsers.push(destinationUsername)
        offlineMessages[destinationUsername] += `Mail from ${username}: ${message}_`
        if(destinationUsername == ""){
          socket.emit("mailSentNotificationCommand", "NO ONE! / Or to a new user", message)
        }
        else{
        socket.emit("mailSentNotificationCommand", destinationUsername, message)
        }
        console.log(offlineMessages)
        console.log(offlineUsers)
        console.log(message)
      }
      else{
        socket.broadcast.emit("online mail", destinationUsername, message)
      }
      }
    else if(commandType == '/help'){
      socket.emit('help command')
    }
    else if(commandType == '/changename'){
      const username2 = command.split(' ')[1]
      socket.emit("changeNameCommand", username2)
    }
    else if(commandType == '/clearMsg'){
      socket.emit("clearMessagesCommand")
    }
    else if(commandType == '/darkmode'){
      socket.emit("darkModeCommand")
    }
    else if(commandType == '/lightmode'){
      socket.emit("lightModeCommand")
    }
    else if(commandType == '/ban'){
      if(adminPerm){
        let banVictim = command.split(" ")[1]
        let banDuration = command.split(" ")[2]
        let banReason = command.split(" ").slice(3)
        socket.broadcast.emit("banCommand", banVictim, banDuration, banReason)
      }
        else{
          socket.emit("chat message4", "You do not have permission to use this command");
        }
    }
    else{
      socket.emit("unknown command")
    }
  })
  socket.on("voteKickNameMatched", (username) => {
    io.emit("voteKickNameMatched", username)
  })
  socket.on("chat message3", (msg) => {
    socket.broadcast.emit("chat message", msg)
  })
  socket.on("kickAccepted", (username) => {
    numKickAccepted++;
    console.log("numKickAccepted = " +numKickAccepted)
    if((numUsers / 2) < numKickAccepted){ 
      io.emit("voteKickAccepted", username)
    }
    if(numKickRejected == numKickAccepted){
      io.emit("voteKickDraw", username)
    }
  })
  socket.on("kickRejected", (username) => {
    console.log("numKickRejected = " +numKickRejected)
    numKickRejected++;
    if((numUsers / 2) < numKickRejected){
      io.emit("voteKickRejected", username)
    }
    if(numKickAccepted == numKickRejected){
      io.emit("voteKickDraw", username)
    }
  })
  socket.emit('get name')
  socket.on('name return', (username) => {
    onlineUsers.push(username)
    socket.emit("adminGetUsernameReturn", onlineUsers)
  })
  setTimeout(() => {
    socket.emit("get-name")
  }, 1000)
  socket.on('get-name', (username) => {
      for(let i = 0; i < offlineUsers.length; i++){
        if(offlineUsers[i] == username &&  offlineMessages[username] != undefined){
          socket.emit("mail message", "You received a mail: "+offlineMessages[username])
        }
      }
      delete offlineMessages[username]
  })
  onlineUsers = removeDuplicates(onlineUsers);
  offlineUsers = removeDuplicates(offlineUsers);
  
  function removeDuplicates(arr) {
    return [...new Set(arr)];
}
for(let i = 0; i < 5; i++){
  io.emit("checkWhoIsOnline", onlineUsers)
  socket.emit("checkWhoIsOnline", onlineUsers)
}
socket.on("connected", (username) => {
  io.emit("connected", username)
})
app.get('/info.html', (req, res) => {
  res.sendFile(__dirname + '/info.html')
})
app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
socket.on("forceChangeName", (curName, nameToChange) => {
  socket.broadcast.emit("forceChangeNameCheck", curName, nameToChange)
})
socket.on("getUsersOnline", () => {
  socket.broadcast.emit("getUsersOnlineCheck", onlineUsers)
})
socket.on("returnUsersOnlineCheck", username => {
  getUsersOnlineArray.push(username);
  getUsersOnlineArray = removeDuplicates(getUsersOnlineArray);
  io.emit("updateOnlineUsers2", getUsersOnlineArray)
  console.log("getUsersOnlineArray = " + getUsersOnlineArray)
})
socket.on('userBanned', (banVictim, banDuration, banReason) => {
  io.emit("userBannedBroadcast", banVictim, banDuration, banReason)
  bannedUsers[banVictim] = [banDuration]
  setTimeout(() => {
    delete bannedUsers[banVictim];
  }, banDuration * 1000)
  console.log(bannedUsers)
})
socket.on("getNameServer", username => {
  if(bannedUsers[username] == undefined){
    return;
  }
  else if(bannedUsers[username] !== undefined){
    socket.emit("userIsBanned")
  }
})
setTimeout(() => {
  getNameServer()
}, 1000)
function getNameServer(){
  io.emit("getNameServer")
}
app.get('/account.html', (req, res) => {
  res.sendFile(__dirname + '/account.html')
})
socket.on("loginCorrect", () => {
  socket.emit("loggedIn")
  console.log('received login')
})
app.get('/adminPanel.html', (req, res) => {
  res.sendFile(__dirname + '/adminPanel.html')
})
socket.on('chat message4', (msg, room, username, textColour) => {
  // Broadcast message to all clients except the one that sent it
  if(room == ''){
  socket.broadcast.emit('chat message', msg, username, textColour);
  socket.broadcast.emit('new message notification', msg);
  console.log(msg)
  }
  else{
    socket.to(room).emit('chat message', msg); 
  }
});
socket.on("chat message5", msg => {
  socket.broadcast.emit('chat message5', msg);
})
app.get('/signup.html', (req, res) => {
  res.sendFile(__dirname + '/signup.html')
})
socket.on("createAccount", (account) => {
  const username = account[0]
  const password = account[1]
  if (!accountCreated[username]) {
      accountCreated[username] = password;
      console.log("Account Created:", accountCreated);
  } else {
      console.log("Account creation failed: Username already exists.");
  }
});
socket.emit("checkIfMissedMessagesName")
socket.on("checkIfMissedMessages", username => {
  for(let i = 0; i < offlineUsers.length; i++){
    if(offlineUsers[i] == username){
      socket.emit("checkIfmissedMessages", messages)
    }
  }
})
socket.on("getAccounts", () => {
  socket.emit("getAccountsReturn", accountCreated)
  console.log(accountCreated)
})
app.get('/download/:filename', (req, res) => {
  const fileName = req.params.filename;
  const filePath = path.join(__dirname, 'uploads', fileName);
  res.download(filePath, (err) => {
      if (err) {
          res.status(404).send('File not found');
      }
  });
});
//end of io.on('connection')
});


const PORT = 3000
const HOST = '0.0.0.0';
http.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
