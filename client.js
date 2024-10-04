
const socket = io();
const form = document.getElementById('chat-form');
const input = document.getElementById('chat-input');
const chatDisplay = document.getElementById('chat-display');
const fileInput = document.getElementById('file-input');
const fileSendButton = document.getElementById('file-send-button');
const sendBtn = document.getElementById("send");
const submitName = document.getElementById("submitName");
const usernameInput = document.getElementById("username");
let soundeffect = new Audio("chatSoundEffect.mp3");
const offNot = document.getElementById("offNot");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
let notificationsEnabled = true;

Notification.requestPermission();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value && usernameInput.value) {
    input.value = input.value.replaceAll("skibidi", "_______").replaceAll("rizzler","_______").replaceAll("sigma", "_____").replaceAll("ohio", "_____");
    const username = usernameInput.value;
    const message = `<${username}>${input.value}`;
    const senderMessage = `${input.value}`;
    console.log('Sending message:', message);
    socket.emit('chat message', message);
    socket.emit('sender message', senderMessage);
    appendMessage('YOU: ' + senderMessage);
    input.value = "";
  }
});

// Login functionality
loginBtn.onclick = () => {
  if (password.value === "stcxkl@ctdvn") {
    const AdminUI = document.createElement("div");
    const targetInput = document.createElement("input");
    const kickBtn = document.createElement("button");
    // Add your admin UI logic here
  }
};

fileSendButton.addEventListener('click', () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      socket.emit('file upload', { name: file.name, data: e.target.result });
    };
    reader.readAsArrayBuffer(file);
  }
});

socket.on('chat message', (msg) => {
  console.log('Received message:', msg);
  appendMessage(msg);
});

socket.on('new message notification', (msg) => {
  if (notificationsEnabled && Notification.permission === "granted") {
    const username = msg.split('>')[0].substr(1);
    const message = msg.split('>')[1].trim();
    new Notification(`New message from ${username}`, {
      body: message
    });
    soundeffect.play();
  }
});

socket.on('sender message', () => appendMessage('You Joined'));

function appendMessage(msg) {
  console.log('received message:', msg);
  const myMessage = document.createElement("div");
  myMessage.classList.add("myMessage");
  myMessage.textContent = msg;
  chatDisplay.appendChild(myMessage);
  console.log('chatDisplay updated. New value:', myMessage.textContent);
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

socket.on('notification', (msg) => {
  if (notificationsEnabled && Notification.permission === "granted") {
    const username = msg.split('>')[0].substr(1);
    const message = msg.split('>')[1].trim();
    new Notification(`New message from ${username}`, {
      body: message
    });
    soundeffect.play();
  }
});

socket.on('file message', (fileName) => {
  const link = document.createElement('a');
  link.href = '/uploads/' + fileName;
  link.download = fileName;
  link.textContent = fileName;
  chatDisplay.appendChild(link);
  chatDisplay.appendChild(document.createElement('br'));
});

socket.on('connection', () => {
  console.log('Connected to server');
  socket.emit('join', userID); // Make sure userID is defined somewhere
});

// Toggle notifications
offNot.addEventListener('click', () => {
  notificationsEnabled = !notificationsEnabled;
  console.log('Notifications ' + (notificationsEnabled ? 'enabled' : 'disabled'));
});
