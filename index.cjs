const { isUtf8 } = require('buffer');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');
const path = require('path');
const https = require('https')

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

  socket.on('kick user', targetUsername => {
    socket.to(targetUsername).emit('close window')
  console.log(targetUsername + ' has been kicked')})
  socket.on('ip', ip => console.log(ip))

  socket.on('chat message', (msg) => {
    // Broadcast message to all clients except the one that sent it
    socket.broadcast.emit('chat message', msg);
    socket.broadcast.emit('new message notification', msg);
    console.log(msg)
    
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


  socket.on('sender message', msg => {
    socket.to(socket.id).emit('sender message', msg)
    socket.broadcast.emit('notification', msg)
  })

  //force disconnecter
  socket.on('disconnect', userId => {
    socket.disconnect()
  })
  //log the ip address to the console
  socket.on('publicIP', ip => console.log(ip))

  socket.on('send-file', (fileData) => {
    const { fileName, fileContent } = fileData;
    const filePath = path.join(__dirname, 'uploads', fileName);
  
    fs.writeFile(filePath, Buffer.from(fileContent), (err) => {
      if (err) {
        console.error('Error saving file:', err);
        socket.emit('file-error', 'Error saving file');
      } else {
        console.log('File saved:', fileName);
        // Send the file content along with the file name
        io.emit('file-received', { fileName, fileContent: Buffer.from(fileContent).toString('base64') });
      }
    });
    deleteFilesInFolder('./uploads');
  });

  socket.on('disconnect', () => {
    numUsers--;
    console.log(`User disconnected. Total users: ${numUsers}`);
    socket.emit('user count', numUsers)
  });
});

const deleteFilesInFolder = (folderPath) => {
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


const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
http.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});