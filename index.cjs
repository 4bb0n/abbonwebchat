<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Web Chat</title>
    <style>
      body {
        max-width: 100%;
        overflow-x: hidden;
      }

      input {
        height: 100px;
        width: 200px;
        border-radius: 15px;
        font-size: 20px;
        border-width: 1px;
        font-family: monospace;
        background-color: rgb(0, 8, 33);
        color: white;
        box-shadow: none;
      }

      #chat-display {
        height: 400px;
        width: 100%;
        font-size: 20px;
        background-color: #f5f5f5;
        font-family: sans-serif;
        padding-top: 10px;
        padding-bottom: 10px;
        border-color: black;
        overflow-y: scroll;
        border-width: 2px;
      }
      .myMessage {
        width: 1000px;
        position: relative;
        height: auto;
        background-color: #dddce2;
        opacity: 5;
        margin: 10px;
        border-radius: 10px;
        color: black;
        padding: 5px;
        padding-top: 10px;
        padding-bottom: 10px;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
      .senderMessage {
        width: 1000px;
        position: relative;
        left: 31%;
        height: auto;
        background-image: linear-gradient(#53bbf0, #258ff4);
        opacity: 5;
        margin: 10px;
        border-radius: 10px;
        color: white;
        text-align: left;
        font-family: helvetica;
        padding: 5px;
        padding-top: 10px;
        padding-bottom: 10px;

      }
      .triangle {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0 5px 32px 5px;
        border-color: transparent transparent #258ff4 transparent;
        transform: rotate(136deg);
      }
      button {
        height: 80px;
        width: 160px;
        background-color: lime;
        border-radius: 15px;
        font-size: larger;
        border-width: 1px;
        box-shadow: 2px 2px 2px black;
        cursor: pointer;
        font-family: Impact, fantasy;
      }
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
      #send{
        border-radius: 15px;
        width: 140px;
        margin: auto;
        font-size: 24px;
        height: 50px;
        position: relative;
        font-family: Arial, Helvetica;
        font-weight: bold;
        background-color: rgb(59, 196, 255);
      }
      #send:hover {
        background-color: rgb(52, 162, 236);
      }
      #chat-input {
        box-shadow: 3px 3px 2px;
        border-width: 3px;
        border-color: #000000;
        width: 85%;
        height: 50px;
        font-family: helvetica;
        background-color: whitesmoke;
        color: black;
        border-radius: 30px;
        padding-left: 20px;
        box-shadow: none;
        border-radius: 15px;
      }
      #chat-input:active {
        border-color: #dbdbdb;
      }
      pre {
        font-size: 24px;
        font-weight: bold;
        font-family: monospace;
      }
      #loginBtn {
        background-color: rgb(224, 224, 224);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border-radius: 0;
        width: 100px;
        height: 50px;
        position: relative;
        bottom: 30px;
        left: 70px;
        top: 50px;
      }
      #loginBtn:hover {
        background-color: rgb(240, 240, 240);
      }
      #password {
        height: 40px;
        position: relative;
        left: 20px;
        box-shadow: 2px 2px 2px;
        text-align: center;
        font-family: Trebuchet MS, sans-serif;
        font-weight: bold;
        top: 55px;
      }
      #note {
        font-size: 10x;
        position: relative;
        left: 70px;
        color: red;
        top: 50px;
      }
      #file-input {
        height: 50px;
        border-radius: 0;
        border: solid 5px black;
        background-color: white;
        color: black;
        padding: 10px;
        padding-top: 0px;
        text-align: center;
        top: 50px;
      }
      @keyframes rainbowText {
        10% {
          color: red;
        }
        20% {
          color: orangered;
        }
        25% {
          color: rgb(255, 111, 0);
        }
        30% {
          color: yellow;
        }
        35% {
          color: yellowgreen;
        }
        40% {
          color: lime;
        }
        45% {
          color: green;
        }
        50% {
          color: rgb(0, 255, 251);
        }
        55% {
          color: rgb(0, 123, 255);
        }
        60% {
          color: rgb(21, 0, 255);
        }
        70% {
          color: rgb(123, 0, 255);
        }
        80% {
          color: rgb(242, 0, 255);
        }
        90% {
          color: rgb(255, 0, 123);
        }
        100% {
          color: rgb(255, 0, 0);
        }
      }
      @keyframes rainbowBackground {
        10% {
          background-color: red;
        }
        20% {
          background-color: orangered;
        }
        25% {
          background-color: rgb(255, 111, 0);
        }
        30% {
          background-color: yellow;
        }
        35% {
          background-color: yellowgreen;
        }
        40% {
          background-color: lime;
        }
        45% {
          background-color: green;
        }
        50% {
          background-color: rgb(0, 255, 251);
        }
        55% {
          background-color: rgb(0, 123, 255);
        }
        60% {
          background-color: rgb(21, 0, 255);
        }
        70% {
          background-color: rgb(123, 0, 255);
        }
        80% {
          background-color: rgb(242, 0, 255);
        }
        90% {
          background-color: rgb(255, 0, 123);
        }
        100% {
          background-color: rgb(255, 0, 0);
        }
      }
      #username {
        height: 40px;
        text-align: center;
        font-family: Trebuchet MS, sans-serif;
        font-weight: bold;
        box-shadow: 2px 2px 2px;
        position: relative;
        left: 20px;
        top: 50px;
      }
      #userInfo {
        position: relative;
        left: 1059px;
        bottom: 100px;
      }
      #file-send-button {
        height: 40px;
        border-radius: 0;
        background-color: rgb(0, 0, 41);
        color: white;
        position: relative;
        top: 5px;
        left: 25px;
        box-shadow: 2px 2px 2px lime;
        border-left: solid 10px rgb(0, 179, 255);
        top: 30px;
      }
      @keyframes border-left-appear {
        0% {
          border-left: solid 10px rgb(0, 179, 255);
        }
        100% {
          border-left: solid 10px red;
        }
      }
      @keyframes border-right-appear {
        0% {
          border-right: solid 10px rgb(0, 179, 255);
        }
        100% {
          border-right: solid 10px red;
        }
      }
      #file-send-button:hover {
        background-color: rgb(0, 0, 70);
        animation-name: border-left-appear;
        animation-duration: 0.5s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      h3 {
        color: white;
        text-align: center;
      }
      #ai {
        position: absolute;
        left: 500px;
        top: 800px;
        width: 1000px;
      }

      #clearAllMsg{
        height:70px;
        width: 200px;
        border-radius:0;
        background-color: lightgray;
        margin-top: 15px;
        font-family: sans-serif;
        font-weight: bold;
        box-shadow:gray;
        margin-bottom: 15px;
        position:relative;
        bottom: 12px;
        left: 20px;
      }
      #clearAllMsg:hover{
        background-color: rgb(190, 197, 255);
      }
      #messageSettings{
        position: relative;
        color:black;
        font-family: Verdana, Geneva, Tahoma, sans-serif; 
        text-decoration: underline rgb(108, 108, 255);
        background-color: rgb(157, 165, 255);
        width: 200px;
        padding: 15px;
        left: 10px;
        bottom: 8px;
      }
      #removeLastMsg{
        height:70px;
        width: 200px;
        border-radius:0;
        background-color: lightgray;
        margin-top: 15px;
        font-family: sans-serif;
        font-weight: bold;
        box-shadow:gray;
        left:50px;
        margin-left: 40px;
      }
      #removeLastMsg:hover{
        background-color: rgb(190, 197, 255);
      }
      #darkMode{
        border-radius: 2px;
        background-color: rgb(0, 0, 85);
        color: lightgray;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 600;
        box-shadow: 3px 3px gray;
      }
      #lightMode{
        border-radius: 2px;
        position:relative;
        left: 20px;
        background-color: rgba(245, 245, 245, 0.905);
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 600;
      }
      #speechBoxColour{
        color: black;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 600;
      }
      #darkBlueSpeechBox{
        border-radius: 5px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        background-color: darkblue;
        color:white;
      }
      @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
      #targetUser{
        border-radius: 5px;
        height: 50px;
        width: 200px;
        text-align: center;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: bold;
        font-style: normal;
        font-optical-sizing: auto;
      }
      #targetUser::placeholder{
        font-weight: 500;
      }
      #kickUserButton{
        height: 50px;
        border-radius: 0;
        position: relative;
        left: 20px;
        background-color: #dbdbdb;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: bold;
        font-size: large;
        animation-name: rainbowText;
        animation-duration: 4s;
        animation-iteration-count: infinite;
      }
      .kickMessage{
        width: 1000px;
        position: relative;
        left: 20%;
        text-align: center;
        height: auto;
        background-color: #dddce2;
        opacity: 5;
        margin: 10px;
        border-radius: 10px;
        color: red;
        padding: 5px;
        padding-top: 10px;
        padding-bottom: 10px;
        word-wrap: break-word;
        overflow-wrap: break-word;
        box-shadow: 0px 0px 5px red;
      }
      #room{
        height: 50px;
        border-radius: 2px;
        background-color: lightgray;
        color: black;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-align: center;
        box-shadow: 2px 2px 2px black;
      }
      #room:hover{
        box-shadow: 0px 0px 5px blue;
      }
      #roomLeave{
        position: relative;
        top: 13px;
        height: 50px;
        border-radius: 2px;
        background-color: lightgray;
        color: black;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-align: center;
        box-shadow: 2px 2px 2px black;
      }
      #roomLeave:hover{
        box-shadow: 0px 0px 5px blue;
      }
      #joinRoom{
        position: relative;
        background-color: rgb(61, 255, 80);
        left: 15px;
        border-radius: 0;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: bold;
        font-size: 20;
      }
      #joinRoom:hover{
        background-color: rgb(141, 254, 152);
      }
      #leaveRoom{
        position: relative;
        top: 10px;
        background-color: rgb(250, 45, 45);
        left: 15px;
        border-radius: 0;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: bold;
        font-size: 20;
      }
      #leaveRoom:hover{
        background-color: rgb(250, 45, 93);
      }
      .rickroll{
        height: 500px;
        width: 100%;
      }
      #forceChatMsg{
        border-radius: 5px;
        height: 50px;
        width: 200px;
        text-align: center;
      }
      #forceChatName{
        position: relative;
        left: 20px;
        border-radius: 5px;
        height: 50px;
        width: 200px;
        text-align: center;
      }
      .goodInput{
        position: relative;
        border-radius: 5px;
        height: 50px;
        width: 200px;
        text-align: center;
      }
      #forceChatBtn{
        position: relative;
        left: 40px;
        height: 50px;
        border-radius: 0;
        position: relative;
        background-color: #dbdbdb;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: bold;
        font-size: large;
        box-shadow: 0px 0px 5px gold;
        color: red;
      }
      button:hover{
        box-shadow: 0px 0px 5px red;
      }
      input:hover{
        box-shadow: 0px 0px 5px blue;
      }
      .voteKickMessage{
        width: 1000px;
        position: relative;
        height: auto;
        background-color: #dddce2;
        opacity: 5;
        margin: 10px;
        border-radius: 10px;
        color: black;
        padding: 5px;
        padding-top: 10px;
        padding-bottom: 10px;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
      #command{
        position: relative;
        left: 20px;
        border-radius: 5px;
        height: 50px;
        width: 400px;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 15px;
      }
      #sendCommandBtn{
        position: relative;
        left: 40px;
        height: 50px;
        border-radius: 0;
        position: relative;
        background-color: #dbdbdb;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: bold;
        width: 200px;
      }
      #commandContainer{
        background-color: #dfdfdf;
        width: 680px;
      }
      .goodBtn{
        background-color: rgb(224, 224, 224);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border-radius: 0;
        width: 100px;
        height: 50px;
        position: relative;
      }
      #showDirectMessages{
        position: relative;
        margin-bottom: 10px;
        width: 130px;
        height: 60px;
      }
      #directMsg{
        position: relative;
        background-color: #b0b1ff;
        height: 100px;
        width: 100%;
        margin-bottom: 20px;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
      #toggleDirectMsgVisibility{
        position: relative;
        bottom: 10px;
        left: 1200px;
        height: 30px;
        font-size: normal;
        width: 300px;
      }
      #wiki{
        position: relative;
        left: 1300px;
        bottom: 80px;
        width: 200px;
        height: 30px;
      }
      #showUploadedFiles{
        width: 300px;
        height: 40px;
      }
      .fileMessage{
        position: relative;
        right: 0;
      }
      #fileUploads{
        width: 350px;
        height: 300px;
        overflow-y: scroll;
        padding-bottom: 20px;
      }
      #forceChangeName{
        position: relative;
        left: 20px;
      }
      #forceChangeNameBtn{
        position: relative;
        left: 20px;
        width: 200px;
      }
      #secretAdmin{
        position: relative;
        left: 880px;
        height: 20px;
        width: 20px;
      }
    </style>
  </head>
  <body>
    <div id="directMsg">
    </div>
    <button id="toggleDirectMsgVisibility" class="goodBtn">Show / Hide Direct Messages</button>
    <div id="chat-display" readonly style="border-width: 2px;"></div>
    <form id="chat-form">
      <input
        id="chat-input"
        type="text"
        autocomplete="off"
        contenteditable="on"
        placeholder="Type a message..." />
      <button id="send" type="submit">Send</button>
    </form>
    <div id="commandContainer">
    <input type="text" id="command" placeholder="command | Type /help for help">
    <button id="sendCommandBtn">Send Command</button>
    </div>
    <button id="wiki" class="goodBtn">Help Wiki </button>
    <div id="voteKickDiv" style="display: none">
    <button id="acceptKick">Accept Kick</button>
    <button id="rejectKick">Reject Kick</button>
    </div>
    <br>
    <input type="file" id="file-input" />
    <button id="file-send-button">SEND FILE</button>
    <div id="progressContainer">
      <div
        id="progressBar"
        style="width: 1%; height: 20px; background-color: lime"></div>
    </div>
    <button id="showUploadedFiles" class="goodBtn">Show Uploaded Files</button>
    <div id="fileUploads" style="display: none;">
    <div id="uploadedFiles"></div>
    </div>
    <div id="userInfo">
      <input placeholder="username" id="username" autocomplete="off" type="username"><br />
      <input
        type="password"
        id="password"
        placeholder="password*"
        autocomplete="off" />
      <p id="note">*for admins only!</p>
      <br />
      <button id="loginBtn">Login</button>
    </div>
    <pre id="userOnline">Users online: 
0</pre>
    <p id="usersOnlineNames"></p>
    <input type="text" id="room" placeholder="room"/>
    <button id="joinRoom">join room</button>
    <br>
    <input type="text" id="roomLeave" placeholder="room">
    <button id="leaveRoom">leave room</button>
    <br />
    <br />
    <hr />
    <h2 id="settings">SETTINGS</h2>
    <pre>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </pre>
    <br />
    <h3 id="speechBoxColour">speech box colour</h3>
    <button id="darkBlueSpeechBox">Dark Blue</button>
    <pre>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </pre>
    <div id="background-color-mode">
      <button id="darkMode">Dark Mode</button>
      <button id="lightMode">Light Mode</button>
    </div>
    <pre>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </pre>
    <div id="Messages">
      <h3 id="messageSettings">Message Settings</h3>
      <button id="clearAllMsg">Clear All Messages</button>
      <button id="removeLastMsg">Remove Last Message</button>
    </div>
    <hr />
    <div id="AdminUIContainer" style="display: none">
      <h3 id="adminUI" style="color:red;">Admin Panel</h3>
      <input type="text" placeholder="username to kick" id="targetUser"/>
      <button id="kickUserButton">Kick User</button>
      <br>
      <div id="force-chat">
        <h2 id="forceChat" style="color: red;">Force Chat</h2>
        <input type="text" placeholder="message" id="forceChatMsg">
        <input type="text" placeholder="name" id="forceChatName">
        <button id="forceChatBtn">Force Chat</button>
        <button id="secretAdmin" class="goodBtn">   </button>
        <div id="secretAdminDiv" style="display: none;">
          <input type="text" id="currentName" placeholder="Current Name" class="goodInput">
          <input type="text" id="forceChangeName" placeholder="Force Change Name" class="goodInput">
          <button id="forceChangeNameBtn" class="goodBtn">Change Name</button>
        </div>
      </div>
    </div>

    <script src="https://cdn.socket.io/4.5.4/socket.io.js"></script>
    <script src="index.cjs"></script>
    <script>
      const socket = io();
      const form = document.getElementById("chat-form");
      const input = document.getElementById("chat-input");
      const chatDisplay = document.getElementById("chat-display");
      const fileInput = document.getElementById("file-input");
      const fileSendButton = document.getElementById("file-send-button");
      const sendBtn = document.getElementById("send");
      const usernameInput = document.getElementById("username");
      const offNot = document.getElementById("offnot");
      const password = document.getElementById("password");
      const loginBtn = document.getElementById("loginBtn");
      const darkMode = document.getElementById("darkMode");
      const lightMode = document.getElementById("lightMode");
      Notification.requestPermission();
      const aiIframe = document.getElementById("ai");
      const clearAllMsg = document.getElementById("clearAllMsg");
      const removeLastMsg = document.getElementById("removeLastMsg");
      const darkBlueSpeechBoxBtn = document.getElementById("darkBlueSpeechBox");
      const chatDisplayForm = document.getElementById("chat-display-form");
      const joinRoom = document.getElementById("joinRoom");
      const leaveRoom = document.getElementById("leaveRoom");
      const room = document.getElementById("room");
      const roomLeave = document.getElementById("roomLeave");
      const usersOnlineList = document.getElementById("usersOnlineList");
      const forceChatBtn = document.getElementById("forceChatBtn");
      const forceChatMsg = document.getElementById("forceChatMsg");
      const forceChatName = document.getElementById("forceChatName");
      const sendCommandBtn = document.getElementById("sendCommandBtn");
      const command = document.getElementById("command");
      const acceptKickBtn = document.getElementById("acceptKick");
      const rejectKick = document.getElementById("rejectKick");
      const username = document.getElementById("username");
      const usersOnlineNames = document.getElementById("usersOnlineNames");
      const directMsgDiv = document.getElementById("directMsg");
      const toggleVisibilityDirectMsgBtn = document.getElementById("toggleDirectMsgVisibility");
      const wikiBtn = document.getElementById("wiki");
      const showUploadedFilesBtn = document.getElementById("showUploadedFiles");
      const fileUploads = document.getElementById("fileUploads")
      const secretAdminBtn = document.getElementById("secretAdmin");
      const secretAdminDiv = document.getElementById("secretAdminDIv");
      const forceChangeName = document.getElementById("forceChangeName");
      const currentName = document.getElementById("currentName")
      const changeNameBtn = document.getElementById("forceChangeNameBtn")
      let directMsgPerson = "";
      let targetDirectMsgPerson = "";
      let voteName = "";
      let toggleVisibilityDirectMsgBtnVAR = 1;
      let appendMessageOrder = 0;
      let toggleVisibilitySecretAdmin = 0;

      socket.on("forceChangeNameCheck", (curName, nameToChange) => {
        if(username.value == curName){
          username.value = nameToChange;
        }
      })

      changeNameBtn.addEventListener("click", () => {
        const currentName = document.getElementById("currentName").value
        const forceChangeName = document.getElementById("forceChangeName").value;
        socket.emit("forceChangeName", currentName, forceChangeName)
      })

      secretAdminBtn.addEventListener("click", () => {
        if(toggleVisibilitySecretAdmin == 0){
        document.getElementById("secretAdminDiv").style.display = "block";
        toggleVisibilitySecretAdmin ++
        }
        else{
          document.getElementById("secretAdminDiv").style.display = "none";
          toggleVisibilitySecretAdmin --
        }
      })

      showUploadedFilesBtn.onmouseover = () => {
        document.getElementById("fileUploads").style.display = "block"
        document.getElementById("fileUploads").style.backgroundColor = "lightgray"
      }
      fileUploads.onmouseleave = () => {
        document.getElementById("fileUploads").style.display = "none"
        document.getElementById("fileUploads").style.backgroundColor = "white"
      }

      wikiBtn.addEventListener("click", () => {
        window.open('/info.html', "_self")
      })

      toggleVisibilityDirectMsgBtn.addEventListener("click", () => {
        if(toggleVisibilityDirectMsgBtnVAR == 1){
          directMsgDiv.style.display = "none"
          toggleVisibilityDirectMsgBtnVAR -= 1
        }
        else{
          directMsgDiv.style.display = "inherit"
          directMsgDiv.style.backgroundColor = "#b0b1ff"
          directMsgDiv.style.width = "100%"
          directMsgDiv.style.height = "100px"
          directMsgDiv.style.marginBottom = "20px"
          toggleVisibilityDirectMsgBtnVAR += 1
        }
      })

      socket.on("connected", (username) => {
        const button = document.createElement("button");
        button.textContent = username;
        button.style.backgroundColor = "white";
        button.style.color = "black";
        button.style.margin = "10px";
        button.style.padding = "10px";
        button.style.border = "none";
        directMsgDiv.appendChild(button);
        button.addEventListener("click", () => {
          appendMessage("You are now talking to "+ username)
          directMsgPerson = username;
        })
      })

      socket.on("online mail", (destinationUsername, message) => {
        if(username.value == destinationUsername){
          appendMessage(`Mail from ${destinationUsername}: ${message}`);
        }
      })

      socket.on("mailSentNotificationCommand", (destinationUsername, message) => {
        appendMessage(`Mail sent to ${destinationUsername}: ${message}`);
      })

      socket.on("clearMessagesCommand", () => {
        clearAllMsg.click();
      })

      socket.on("lightModeCommand", () => {
        lightMode.click();
      })

      socket.on("darkModeCommand", () => {
        darkMode.click();
      })

      socket.on("changeNameCommand", (name) => {
        appendMessage("Name changed to " + name);
        username.value = name;
      })

      socket.on("unknown command", () => {
        appendMessage("Unknown command");
      })

      socket.on("updateOnlineUsers", (onlineUsers) => {
        let tempArray2 = [...new Set(onlineUsers)]
        usersOnlineNames.textContent = tempArray2[0];
        if(!usersOnlineNames.textContent == ''){
          usersOnlineNames += tempArray2[-1]
        }
      })

      socket.on("checkWhoIsOnline", () => {
        socket.emit("checkWhoIsOnline", username.value);
      })

      socket.on("help command", () => {
        appendMessage(`Commands: /votekick, /joincustomroom, /leaveroom, /mail, /help, /changename, /clearMsg, /darkMode, /lightMode`);
      })

      socket.on("get-name", () => {
        socket.emit("get-name", username.value);
      })

      socket.on("get name", () => {
        socket.emit("name return", username.value);
      })

      socket.on("leave room", room => {
        document.getElementById("roomLeave").value = room;
        leaveRoom.click();
      })

      socket.on("join room", room => {
        document.getElementById("room").value = room;
        joinRoom.click();
      })

      socket.on("voteKickDraw", (username) => {
        appendKickMessage(`Vote kick drew for ${username}!`);
      })

      socket.on("voteKickAccepted", (username) => {
        const name = document.getElementById("username").value;
        appendKickMessage(`${username} has been kicked! Majority agreed to kick!`);
            socket.emit("kick-user", username);
      })

      socket.on("voteKickRejected", (username) => {
        appendKickMessage(`${username} has been kicked! Majority disagreed to kick!`);
      })

      acceptKickBtn.addEventListener("click", () => {
        socket.emit("chat message3", `${username.value} has voted to kick!`);
        socket.emit("kickAccepted", voteName)
        appendMessage("You have voted to kick!");
        voteKickDiv.style.display = "none";
      })
      rejectKick.addEventListener("click", () => {
        socket.emit("chat message3", `${username.value} has rejected the kick!`);
        socket.emit("kickRejected", voteName)
        appendMessage("You have rejected the kick!");
        voteKickDiv.style.display = "none";
      })
      socket.on('voteKickNameMatched', (username) => {
        appendMessage(`${username} has been voted to kick! Majority is needed to complete the kick!`)
        const voteKickDiv = document.getElementById("voteKickDiv");
        voteName = username;
        voteKickDiv.style.display = "initial";
      })

      socket.on('votekick', (username) => {
        if(username == usernameInput.value){
          socket.emit("voteKickNameMatched", username)
        }
      })

      command.onkeydown = (e) => {
        if (e.key === "Enter") {
          const command = document.getElementById("command").value;
        socket.emit("command", command, username.value);
          document.getElementById("command").value = '';
        }
      };

      sendCommandBtn.addEventListener("click", () => {
        const command = document.getElementById("command").value;
        socket.emit("command", command, username.values);
          document.getElementById("command").value = '';
      })

      socket.on('disconnected', (numUser, date) => {
        appendMessage(`A user disconnected on ${date}, ${numUser} users online`)
      })

      forceChatBtn.addEventListener("click", () => {
        const name = document.getElementById("forceChatName").value;
        const msg = forceChatMsg.value;
        if(forceChatMsg.value){
          socket.emit("force chat", msg, name);
          forceChatMsg.value = '';
        }
        else{
          alert("Please Type in your force chat message! It can't be blank!")
        }
      })

      socket.on('force chat name check', (msg, name) => {
        const username = document.getElementById("username").value;
        console.log('received msg', msg, name)
        if(username == name){
          console.log('name matched', name)
          socket.emit("chat message2", `${name}: ${msg}`);
          appendSenderMessage(`YOU: ${msg}`);
          addMessage('sender', `${name}: ${msg}`);
        }
      })

      socket.on('getName', () => {
        const username = document.getElementById("username").value;
        socket.emit("getName2", username, socket.id);
      })
      
      socket.on('nameAndId', (username, id) => {
        setTimeout(() => {
          usersOnlineList.textContent = `${username} : ${id}`
          console.log('nameAndId', username, id)
        }, 200)
      })

      leaveRoom.addEventListener("click", () => {
        if(roomLeave.value){
        socket.emit("leave room", roomLeave.value);
        appendMessage(`You have left room: ${roomLeave.value}`);
        }
        else{
          appendMessage("Please enter a room name!");
        }
      })

      joinRoom.addEventListener("click", () => {
        if(room.value){
        socket.emit("join room", room.value);
        appendMessage(`You have joined room: ${room.value}`);
        }
        else{
          appendMessage("Please enter a room name!");
        }
      })

      socket.on("user count", numUser => {
        document.getElementById("userOnline").textContent = `Users online:
${numUser}`;
      })

      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        } else {
          console.log("Notification permission denied.");
        }
      });

      function showNotification(msg) {
        const username = msg.split(":")[0]; // Extract username from msg
        const messageContent = msg.split(":").slice(1).join(":").trim(); // Extract message content
        if (Notification.permission === "granted") {
          let notifi = new Notification(`New message from ${username.value}`, {
            body: messageContent,
            tag: "chat message",
          });
          setTimeout(() => {
            notifi.close()
          }, 2000)
        }
      }


      loginBtn.addEventListener("click", () => {
        const password = document.getElementById("password").value;
        localStorage.setItem("password", password);
        if(password == "stcxkl@ctdvn"){
          document.getElementById("AdminUIContainer").style.display = "initial"
      }
    }
  )

      clearAllMsg.addEventListener("click", () => {
        localStorage.removeItem("chatMessages");
        chatDisplay.innerHTML = "Message Cleared";
      })

      removeLastMsg.addEventListener("click", () => {
        const messages = loadMessagesFromLocalStorage();
        if (messages.length > 0) {
          messages.pop();
          saveMessagesToLocalStorage(messages);
          const removedLastMsgWarning = document.createElement("p");
          removedLastMsgWarning.textContent = "[Last Message Removed]"
          chatDisplay.appendChild(removedLastMsgWarning);
          document.getElementsByClassName("senderMessage").pop().remove();
        }
      })

      // Save username to local storage
      usernameInput.addEventListener("input", function () {
        localStorage.setItem("username", usernameInput.value);
      });

      // Function to save messages to local storage
      function saveMessagesToLocalStorage(messages) {
        localStorage.setItem("chatMessages", JSON.stringify(messages));
      }

      // Function to load messages from local storage
      function loadMessagesFromLocalStorage() {
        try {
          return JSON.parse(localStorage.getItem("chatMessages")) || [];
        } catch (error) {
          console.error("Error loading messages from local storage:", error);
          return [];
        }
      }

      // Function to add a new message
      function addMessage(type, content) {
        let messages = loadMessagesFromLocalStorage();
        const newMessage = { type, content, timestamp: Date.now() };
        messages.push(newMessage);
        saveMessagesToLocalStorage(messages);
        return newMessage;
      }

      // Function to display messages
      function displayMessages(messages) {
        const chatDisplay = document.getElementById("chat-display");
        messages.forEach((message) => {
          if (message.type === "sender") {
            appendSenderMessage(message.content);
          } else {
            appendMessage(message.content); 
          }
        });
      }
      socket.on("chat message", (msg, senderName) => {
        msg = msg
        .replaceAll("sigma", "*FORBIDDEN WORD*")
            .replaceAll("ohio", "*FORBIDDEN WORD*")
            .replaceAll("skibidi", "*FORBIDDEN WORD*")
            .replaceAll("rizzler", "*FORBIDDEN WORD*")
            .replaceAll("rizz", "*FORBIDDEN WORD*")
            .replaceAll("OHIO", "*FORBIDDEN WORD*")
            .replaceAll("SKIBIDI", "*FORBIDDEN WORD*")
            .replaceAll("RIZZLER", "*FORBIDDEN WORD*")
            .replaceAll("RIZZ", "*FORBIDDEN WORD*")
            .replaceAll("SIGMA", "*FORBIDDEN WORD*")
            .replaceAll("$igma", "*FORBIDDEN WORD*")
            .replaceAll("$kibidi", "*FORBIDDEN WORD*")
            .replaceAll("$KIBIDI", "*FORBIDDEN WORD*")
            .replaceAll("$IGMA", "*FORBIDDEN WORD*")
            .replaceAll("fuck", "*FORBIDDEN WORD*")
            .replaceAll("FUCK", "*FORBIDDEN WORD*")
        if(senderName == username.value){
          console.log("direct message received")
          console.log(username.value)
          const newMessage = addMessage("received", msg)
          appendMessage(newMessage.content);
        }
        else{
        console.log("global message received")
        const newMessage = addMessage("received", msg)
        appendMessage(newMessage.content);
        }
      });

      socket.on("mail message", (msg) => {
        msg = msg
        .replaceAll("sigma", "*FORBIDDEN WORD*")
            .replaceAll("ohio", "*FORBIDDEN WORD*")
            .replaceAll("skibidi", "*FORBIDDEN WORD*")
            .replaceAll("rizzler", "*FORBIDDEN WORD*")
            .replaceAll("rizz", "*FORBIDDEN WORD*")
            .replaceAll("OHIO", "*FORBIDDEN WORD*")
            .replaceAll("SKIBIDI", "*FORBIDDEN WORD*")
            .replaceAll("RIZZLER", "*FORBIDDEN WORD*")
            .replaceAll("RIZZ", "*FORBIDDEN WORD*")
            .replaceAll("SIGMA", "*FORBIDDEN WORD*")
            .replaceAll("$igma", "*FORBIDDEN WORD*")
            .replaceAll("$kibidi", "*FORBIDDEN WORD*")
            .replaceAll("$KIBIDI", "*FORBIDDEN WORD*")
            .replaceAll("$IGMA", "*FORBIDDEN WORD*")
            .replaceAll("fuck", "*FORBIDDEN WORD*")
            .replaceAll("FUCK", "*FORBIDDEN WORD*")
            .replaceAll("undefinedMail ", "")
        const newMessage = addMessage("received", msg);
        appendMessage(newMessage.content);
      })

      // Modify your form submit event handler
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (input.value) {
          input.value = input.value
            .replaceAll("sigma", "*FORBIDDEN WORD*")
            .replaceAll("ohio", "*FORBIDDEN WORD*")
            .replaceAll("skibidi", "*FORBIDDEN WORD*")
            .replaceAll("rizzler", "*FORBIDDEN WORD*")
            .replaceAll("rizz", "*FORBIDDEN WORD*")
            .replaceAll("OHIO", "*FORBIDDEN WORD*")
            .replaceAll("SKIBIDI", "*FORBIDDEN WORD*")
            .replaceAll("RIZZLER", "*FORBIDDEN WORD*")
            .replaceAll("RIZZ", "*FORBIDDEN WORD*")
            .replaceAll("SIGMA", "*FORBIDDEN WORD*")
            .replaceAll("$igma", "*FORBIDDEN WORD*")
            .replaceAll("$kibidi", "*FORBIDDEN WORD*")
            .replaceAll("$IGMA", "*FORBIDDEN WORD*")
            .replaceAll("$KIBIDI", "*FORBIDDEN WORD*")
            //please, forgive me but I have to ban it! I have to write it down
            .replaceAll("fuck", "*FORBIDDEN WORD*")
            .replaceAll("shit", "*FORBIDDEN WORD*")
            .replaceAll("bitch", "*FORBIDDEN WORD*")
          const username = usernameInput.value;
          const senderMessage = input.value;
          const newMessage = addMessage("sender", "YOU: " + senderMessage);
          appendSenderMessage(newMessage.content);
          const room = document.getElementById("room").value;
          socket.emit("chat message", `${username} : ${senderMessage}`, room, directMsgPerson);
          input.value = "";
          chatDisplay.scrollTop = chatDisplay.scrollHeight;
        }
      });

      function removeBrainRot(msg){
        msg = msg
        .replaceAll("sigma", "*FORBIDDEN WORD*")
            .replaceAll("ohio", "*FORBIDDEN WORD*")
            .replaceAll("skibidi", "*FORBIDDEN WORD*")
            .replaceAll("rizzler", "*FORBIDDEN WORD*")
            .replaceAll("rizz", "*FORBIDDEN WORD*")
            .replaceAll("OHIO", "*FORBIDDEN WORD*")
            .replaceAll("SKIBIDI", "*FORBIDDEN WORD*")
            .replaceAll("RIZZLER", "*FORBIDDEN WORD*")
            .replaceAll("RIZZ", "*FORBIDDEN WORD*")
            .replaceAll("SIGMA", "*FORBIDDEN WORD*")
            .replaceAll("$igma", "*FORBIDDEN WORD*")
            .replaceAll("$kibidi", "*FORBIDDEN WORD*")
            .replaceAll("$KIBIDI", "*FORBIDDEN WORD*")
            .replaceAll("$IGMA", "*FORBIDDEN WORD*")
            .replaceAll("fuck", "*FORBIDDEN WORD*")
            .replaceAll("FUCK", "*FORBIDDEN WORD*")
            .replaceAll("fuck", "*FORBIDDEN WORD*")
            .replaceAll("shit", "*FORBIDDEN WORD*")
            .replaceAll("bitch", "*FORBIDDEN WORD*")
            .replaceAll("undefinedMail ", "")
            return msg;
      }

      // Keep your existing appendMessage and appendSenderMessage functions
      function appendMessage(msg) {
        const chatDisplay = document.getElementById("chat-display");
        const myMessage = document.createElement("div");
        myMessage.classList.add("myMessage");
        chatDisplay.appendChild(myMessage);
        myMessage.textContent = msg;
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
      }

      function appendSenderMessage(msg) {
        const chatDisplay = document.getElementById("chat-display");
        const myMessage = document.createElement("div");
        const deleteBtn = document.createElement("button")
        myMessage.classList.add("senderMessage");
        myMessage.contentEditable = true;
        chatDisplay.appendChild(myMessage);
        myMessage.textContent = msg;
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
      }
      function appendKickMessage(msg) {
        const chatDisplay = document.getElementById("chat-display");
        const myMessage = document.createElement("div");
        myMessage.classList.add("kickMessage");
        chatDisplay.appendChild(myMessage);
        myMessage.textContent = msg;
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
      }

      // Load and display messages when the page loads
      document.addEventListener("DOMContentLoaded", () => {
        const fileMessages = loadFileMessagesFromLocalStorage();
        const messages = loadMessagesFromLocalStorage();
        displayFileMessages(fileMessages);
        displayMessages(messages);

        const password = localStorage.getItem("password");
        document.getElementById("password").value = password;
        if(password == "stcxkl@ctdvn"){
          document.getElementById("AdminUIContainer").style.display = "initial"
      }
      const savedUsername = localStorage.getItem("username");
      if (savedUsername) {
        username.value = savedUsername;
      }
      else{
      socket.emit("get-name", username.value);
      if(!username.value){
        username.value = "NoName"
      }
    }

      socket.emit("connected", username.value);
      });

      // force kick packet receiver
      socket.on("new message notification", (msg) => {
          let notification1 = new Notification(`New message from ${username.value}`, {
            body: msg,
          });
          console.log(notification1)
      });

      socket.on("sender message",
      setTimeout(() => {
      socket.emit('get socketID')
    }, 50));
    socket.on('socket ID', (id) => {
      appendMessage("You Joined on " + new Date() + ' your id is:              \n \n ' + id);
      const username = localStorage.getItem("username");
      socket.emit('userjoined', username, new Date())
      addMessage("received", "You Joined on "+ new Date());
      appendKickMessage("IF YOU'RE NOT GETTING NOTIFICATION FROM MESSAGES, GO TO SETTINGS AND ENABLE IT GLOBALLY (and for google chrome if you forgot to!)")
    })

    socket.on("userjoined", (username, time, id) => {
      appendMessage(`${username} has joined on `+ time + '. ID: ' + id);
      addMessage("received", `${username} has joined on `+ time + '. ID: ' + id);
    })

      socket.on("notification", (msg) => {
        if (notificationsEnabled && Notification.permission === "granted") {
          const username = msg.split(">")[0].substr(1);
          const message = msg.split(">")[1].trim();
          new Notification(`New message from ${username}`, {
            body: message,
          });
          soundeffect.play();
        }
      });

      const targetUser = document.getElementById("targetUser");
      const kickUserButton = document.getElementById("kickUserButton");
      kickUserButton.onclick = () => {
        if(targetUser.value){
        const targetUsername = targetUser.value;
        socket.emit("kick-user", targetUsername);
        appendKickMessage(`${targetUsername} has been kicked!`);
        addKickMessage("received", `${targetUsername} has been kicked!`);
        }
      };
      socket.on("kick-user", (targetUsername) => {
        kickUser(targetUsername)
      })
      function kickUser(targetUsername){
        const username = document.getElementById("username").value;
        console.log(targetUsername)
        if(targetUsername == username){
          let lastWords = window.prompt("You're about to be kicked! Any last words?")
          const rickroll = document.createElement("iframe");
          rickroll.src = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
          rickroll.classList.add("rickroll");
          rickroll.muted = true;
          rickroll.loop = true;
          rickroll.playsInline = true;
          chatDisplay.appendChild(rickroll);
          appendMessage("You have been kicked / Disconnected! Refresh the page to join again!");
          const targetUsername = targetUser.value;
          socket.emit("force disconnect", targetUsername);
        }
      }
      socket.on('force disconnect broadcast alert message', targetUsername => {
        appendKickMessage(targetUsername +' has been kicked!');
      })
      // Get the user's IPv4 address
      const getIPv4Address = () => {
        fetch("https://api.ipify.org?format=json")
          .then((response) => response.json())
          .then((data) => socket.emit("ip", data.ip))
          .catch((error) => console.error("Error fetching IP address:", error));
      };

      // Call the function to log the IPv4 address
      getIPv4Address();

      fileSendButton.onclick = sendFile;

      function sendFile() {
        const file = fileInput.files[0];
        if (file) {
          const progressContainer =
            document.getElementById("progressContainer");
          const progressBar = document.getElementById("progressBar");

          progressContainer.style.display = "block"; // Show progress container
          progressBar.style.width = "0%"; // Reset progress bar

          const reader = new FileReader();

          reader.onload = function (e) {
            const fileContent = e.target.result.split(",")[1]; // Get Base64 string from Data URL
            socket.emit("send-file", {
              fileName: file.name,
              fileContent: fileContent, // Already in Base64 format
            });
          };

          reader.readAsDataURL(file); // Read as Data URL for Base64 encoding

          // Create a new XMLHttpRequest to handle the upload progress
          const xhr = new XMLHttpRequest();
          xhr.open("POST", "http://localhost:3000/uploads"); // Replace with your server endpoint

          xhr.upload.addEventListener("progress", function (event) {
            if (event.lengthComputable) {
              const percentComplete = (event.loaded / event.total) * 100;
              progressBar.style.width = percentComplete + "%";
            }
          });

          xhr.onload = function () {
            fileInput.value = ""; // Reset file input
            progressBar.style.width = "1%";
          };

          xhr.onerror = function () {
            console.error("An error occurred during the file upload.");
          };

          // Send the file using FormData
          const formData = new FormData();
          formData.append("file", file);
          xhr.send(formData);
        }
        fileInput.value = "";

        const file1 = fileInput.files[0];
    if (file1) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const fileContent = e.target.result.split(",")[1]; // Get Base64 string from Data URL
            const fileUrl = URL.createObjectURL(new Blob([new Uint8Array(atob(fileContent).split("").map(c => c.charCodeAt(0)))]));
            socket.emit("send-file", { fileName: file1.name, fileContent: fileContent });

            // Save the file message in localStorage
            const fileMessages = loadFileMessagesFromLocalStorage();
            fileMessages.push(fileUrl);
            saveFileMessagesToLocalStorage(fileMessages);
            appendFileMessage(fileUrl); // Display immediately
        };

        reader.readAsDataURL(file1); // Read the file as Data URL
    }

      }

      // Update the file-received handler
      socket.on("file-received", (data) => {
        const { fileName, fileContent } = data;
        const fileUrl = URL.createObjectURL(
          new Blob([
            new Uint8Array(
              atob(fileContent)
                .split("")
                .map((c) => c.charCodeAt(0))
            ),
          ])
        );

        const fileLink = document.createElement("a");
        fileLink.href = fileUrl;
        fileLink.download = fileName;
        fileLink.textContent = `${fileName}`;
        fileLink.className = "file-download-link";

        const fileMessage = document.createElement("div");
        fileMessage.className = "senderMessage";
        fileMessage.textContent = ``;
        fileMessage.appendChild(fileLink);
      
        chatDisplay.appendChild(fileMessage);
        chatDisplay.scrollTop = chatDisplay.scrollHeight;

        addFileMessage("received", fileName);  
      });

  // Function to save file messages to local storage
  function saveFileMessagesToLocalStorage(fileMessages) {
    localStorage.setItem("fileMessages", JSON.stringify(fileMessages));
    socket.emit("file-messages", fileMessages.textContent);
  }

  // Function to load file messages from local storage
  function loadFileMessagesFromLocalStorage() {
    try {
      return JSON.parse(localStorage.getItem("fileMessages")) || [];
    } catch (error) {
      console.error("Error loading file messages from local storage:", error);
      return [];
    }
  }

  // Function to display file messages
  function displayFileMessages(fileMessages) {
    fileMessages.forEach((message) => {
      appendFileMessage(message.content);
    });
  }

  // Function to add a file message
  function addFileMessage(type, content) {
    let fileMessages = loadFileMessagesFromLocalStorage();
    const newFileMessage = { type, content, timestamp: Date.now() };
    fileMessages.push(newFileMessage);
    saveFileMessagesToLocalStorage(fileMessages);
    return newFileMessage;
  }

  // Append file message to chat display
  function appendFileMessage(msg) {
    const fileMessage = document.createElement("div");
    const fileLink = document.createElement("a");
    fileLink.textContent = msg;
    fileLink.href = ("/download")
    fileLink.download = msg.split('/').pop(); // Use the file name as the download name
    fileMessage.classList.add("fileMessage");
    fileMessage.appendChild(fileLink);
    document.getElementById("uploadedFiles").appendChild(fileMessage);
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
    const test = localStorage.getItem("fileMessages");
    console.log(msg);
}

  // Clear all messages
  clearAllMsg.addEventListener("click", () => {
    localStorage.removeItem("chatMessages");
    localStorage.removeItem("fileMessages");
    chatDisplay.innerHTML = "Message Cleared";
  });

  // Remove last message
  removeLastMsg.addEventListener("click", () => {
    const messages = loadMessagesFromLocalStorage();
    const fileMessages = loadFileMessagesFromLocalStorage();
    if (messages.length > 0) {
      messages.pop();
      saveMessagesToLocalStorage(messages);
      chatDisplay.innerHTML = "Last Message Removed";
      displayMessages(messages);
    }
    if (fileMessages.length > 0) {
      fileMessages.pop();
      saveFileMessagesToLocalStorage(fileMessages);
      displayFileMessages(fileMessages);
    }
  });

      function base64ToBlob(base64, type) {
        const byteCharacters = atob(base64);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += 512) {
          const slice = byteCharacters.slice(offset, offset + 512);
          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }

        return new Blob(byteArrays, { type: type });
      }

      socket.on("file-error", (errorMessage) => {
        console.error("File error:", errorMessage);
      });

      // dark mode and light mode function
      darkMode.addEventListener("click", () => {
        document.body.style.backgroundColor = "rgb(8, 0, 51)";
        username.style.backgroundColor = "white";
        password.style.backgroundColor = "white";
        username.style.color = "black";
        password.style.color = "black";
        chatDisplay.style.backgroundColor = "#005678";
        input.style.backgroundColor = "#6b6b6b";
        input.style.color = "white";
        input.placeholder.style.color = "white";
        const h3 = document.getElementsByTagName("h3");
        const h2 = document.getElementsByTagName("h2");
        const pre = document.getElementsByTagName("pre");
        const p = document.getElementsByTagName("p");
/*************  ✨ Codeium Command ⭐  *************/
        for (let i = 0; i < h3.length; i++) {
          h3[i].style.color = "white";
        }
        for (let i = 0; i < h2.length; i++) {
          h2[i].style.color = "white";
        }
        for (let i = 0; i < pre.length; i++) {
          pre[i].style.color = "white";
        }
        for (let i = 0; i < p.length; i++) {
          p[i].style.color = "white";
        }
        
/******  44e373d3-6bfa-4c98-9c44-a9c39e9088b4  *******/ 
      })

      lightMode.addEventListener("click", () => {
        document.body.style.backgroundColor = "white";
        username.style.backgroundColor = "black";
        password.style.backgroundColor = "black";
        username.style.color = "white";
        password.style.color = "white";
        chatDisplay.style.backgroundColor = "white";
        input.style.backgroundColor = "#dadada";
        input.style.color = "black";
        input.placeholder.style.color = "black";
        console.log("light mode");
      })

      darkBlueSpeechBoxBtn.addEventListener("click", () => {
        for(let i = 0; i < document.getElementsByClassName("senderMessage").length; i++){
          document.getElementsByClassName("senderMessage")[i].style.backgroundImage = "linear-gradient(180deg, rgba(3,251,252,1) 23%, rgba(0,9,255,1) 100%);" 
        }
      })

      socket.on("connection", () => {
        socket.emit("join", userID);
      });


    </script>
  </body>
</html>
