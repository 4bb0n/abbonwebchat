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

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Keep track of the number of connected users
let numUsers = 0;
const chatLogPath = path.join(__dirname, 'messages.txt');
io.on('connection', (socket) => {
  numUsers++;
  let date = new Date();
  console.log(`A user connected at ${date}. Total users: ${numUsers} with the id of ${socket.id}`);
  io.emit('user count', numUsers)

// ask for the user's IP address
  socket.emit('IpAddressRequest')

  socket.on('kick-user', targetUsername => {
    socket.broadcast.emit('kick-user', targetUsername)
  console.log(targetUsername + ' has been kicked!')
})
socket.on("force disconnect", (targetUsername) => {
  io.emit('force disconnect broadcast alert message', targetUsername)
  console.log("force disconnected")
  socket.disconnect();
})
  socket.on('force chat', msg => {
    socket.broadcast.emit('force chat2')
    console.log(msg)
  })

  socket.on('chat message', (msg, room) => {
    // Broadcast message to all clients except the one that sent it
    if(room == ''){
    socket.broadcast.emit('chat message', msg);
    socket.broadcast.emit('new message notification', msg);
    console.log(msg)
    }
    else{
      socket.to(room).emit('chat message', msg); 
    }
    
    // Append the message to the chat log file
    const logEntry = `${msg}`+'\n';
    fs.appendFile(chatLogPath, logEntry, err => {
      if (err) {
        console.error('Error writing to chat log:', err);
        socket.emit('log-error', 'Failed to log chat message');
      } else {
        socket.emit('log-success', 'Message logged');
      }
    });
  });
  fs.readFileSync('messages.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading chat log:', err);
    } else {
      io.emit('chat log', data);
      console.log(data)
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
    fs.readdir(path.join(__dirname, 'uploads'), (err, files) => {
      if (err) {
        console.error('Error reading uploads directory:', err);
        return;
      }
  
      files.forEach(file => {
        const fileToDelete = path.join(__dirname, 'uploads', file);
        fs.unlink(fileToDelete, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
          } else {
            console.log('Deleted file:', file);
          }
        });
      });
  
      // Decode the Base64 string to a Buffer
      const buffer = Buffer.from(fileContent, 'base64');
  
      // Write the file to the uploads directory
      fs.writeFile(filePath, buffer, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
          socket.emit('file-error', 'Error saving file');
        } else {
          console.log('File saved:', fileName);
          io.emit('file-received', { fileName, fileContent });
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
    if(offlineMessages[username] == onlineUsers){
      delete offlineMessages[username]
    }
    socket.emit("updateOnlineUsers", onlineUsers.join(", "))
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
  socket.on('command', (command, username) => {
    console.log(command)
    let commandType = command.split(' ')[0]
    let usernameForVoteKick = command.split(' ')[1]
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
    console.log(username)
    onlineUsers.push(username)
    console.log('online users: ' + onlineUsers)
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
  //end of io.on('connection')
}
});

const deleteilesInFolder = (folderPath) => {
  fs.readdir(folderPath, (err, files) => {
      if (err) throw err;

      files.forEach(file => {
          const filePath = path.join(folderPath, file);
          fs.unlink(filePath, (err) => {
              if (err) throw err;
          });
      });
  });
};


const PORT = 3000
const HOST = '0.0.0.0';
http.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
