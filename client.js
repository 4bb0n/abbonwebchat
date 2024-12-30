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
        height: 600px;
        width: 86%;
        font-size: 20px;
        background-color: #f5f5f5;
        font-family: sans-serif;
        padding-top: 10px;
        padding-bottom: 10px;
        border-color: black;
        overflow-y: scroll;
        border-width: 2px;
        border: 8px solid rgb(0, 0, 81);
        border-radius: 10px;
        scrollbar-color: black lightblue;  
      }
      .newMessage {
        max-width: 450px;
        width: fit-content;
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
        padding-right: 10px;
        word-wrap: break-word;
        overflow-wrap: break-word;
        border-radius: 15px;
      }
      .senderMessage {
        max-width: 450px;
        text-align: right;
        width: fit-content;
        position: relative;
        overflow-x: hidden;
        right: 0;
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
        padding-right: 10px;
        border-radius: 15px;
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
      @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
      #send {
        position: absolute;
        bottom: 25px;
        border-radius: 15px;
        width: 140px;
        margin: auto;
        font-size: 24px;
        height: 50px;
        font-family: Arial, Helvetica;
        font-weight: bold;
        background-color: rgb(59, 196, 255);
      }
      #send:hover {
        background-color: rgb(52, 162, 236);
      }
      #chat-input {
        margin-top: 10px;
        margin-right: 10px;
        box-shadow: 3px 3px 2px;
        border-width: 3px;
        border-color: #000000;
        width: 70%;
        height: 40px;
        font-family: helvetica;
        background-color: whitesmoke;
        color: black;
        border-radius: 30px;
        padding-left: 20px;
        box-shadow: none;
        border-radius: 25px;
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow-wrap: break-word;
        overflow-y:visible;
        font-size: large;
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
        top: 70px;
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
        left: 68rem;
        bottom: 150px;
        color: red;
      }
      #file-input {
        height: 15px;
        width: 10px;
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
        position: relative;
        height: 40px;
        width: 180px;
        text-align: center;
        font-family: Trebuchet MS, sans-serif;
        font-weight: bold;
        color: white; 
      }
      #username:hover{
        background-color: white;
        color: black;
      }
      #userInfo{
        position: absolute;
        left: 1059px;
        top: 680px;
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

      #clearAllMsg {
        height: 70px;
        width: 200px;
        border-radius: 0;
        background-color: lightgray;
        margin-top: 15px;
        font-family: sans-serif;
        font-weight: bold;
        box-shadow: gray;
        margin-bottom: 15px;
        position: relative;
        bottom: 12px;
        left: 20px;
      }
      #clearAllMsg:hover {
        background-color: rgb(190, 197, 255);
      }
      #messageSettings {
        position: relative;
        color: black;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-decoration: underline rgb(108, 108, 255);
        background-color: rgb(157, 165, 255);
        width: 200px;
        padding: 15px;
        left: 10px;
        bottom: 8px;
      }
      #removeLastMsg {
        height: 70px;
        width: 200px;
        border-radius: 0;
        background-color: lightgray;
        margin-top: 15px;
        font-family: sans-serif;
        font-weight: bold;
        box-shadow: gray;
        left: 50px;
        margin-left: 40px;
      }
      #removeLastMsg:hover {
        background-color: rgb(190, 197, 255);
      }
      #darkMode {
        border-radius: 2px;
        background-color: rgb(0, 0, 85);
        color: lightgray;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 600;
        box-shadow: 3px 3px gray;
      }
      #lightMode {
        border-radius: 2px;
        position: relative;
        left: 20px;
        background-color: rgba(245, 245, 245, 0.905);
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        font-weight: 600;
      }
      #speechBoxColour {
        color: black;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        font-weight: 600;
      }
      #darkBlueSpeechBox {
        border-radius: 5px;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        background-color: darkblue;
        color: white;
      }
      @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");
      #targetUser {
        border-radius: 5px;
        height: 50px;
        width: 200px;
        text-align: center;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        font-weight: bold;
        font-style: normal;
        font-optical-sizing: auto;
      }
      #targetUser::placeholder {
        font-weight: 500;
      }
      #kickUserButton {
        height: 50px;
        border-radius: 0;
        position: relative;
        left: 20px;
        background-color: #dbdbdb;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        font-weight: bold;
        font-size: large;
        animation-name: rainbowText;
        animation-duration: 4s;
        animation-iteration-count: infinite;
      }
      .kickMessage {
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
      #room {
        height: 40px;
        width: 200px;
        border-radius: 0;
        background-color: rgb(164, 216, 170);
        color: black;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-align: center;
        margin-top: 10px;
        border: none;
      }
      #room:hover {
        box-shadow: none;
      }
      #roomLeave {
        position: relative;
        left: 3px;
        height: 40px;
        width: 200px;
        background-color: rgb(228, 167, 167);
        color: black;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-align: center;
        margin-top: 5px;
        margin-bottom: 10px;
        border-radius: 0;
        border: none;
      }
      #roomLeave:hover {
        box-shadow: none;
      }
      #joinRoom {
        position: relative;
        background-color: rgb(61, 255, 80);
        left: 10000px;
        border-radius: 0;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
        font-weight: bold;
        font-size: 20;
      }
      #joinRoom:hover {
        background-color: rgb(141, 254, 152);
      }
      #leaveRoom {
        position: relative;
        top: 10px;
        background-color: rgb(250, 45, 45);
        left: 10000px;
        border-radius: 0;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        font-weight: bold;
        font-size: 20;
      }
      #leaveRoom:hover {
        background-color: rgb(250, 45, 93);
      }
      .rickroll {
        height: 500px;
        width: 100%;
      }
      #forceChatMsg {
        border-radius: 5px;
        height: 50px;
        width: 200px;
        text-align: center;
      }
      #forceChatName {
        position: relative;
        left: 20px;
        border-radius: 5px;
        height: 50px;
        width: 200px;
        text-align: center;
      }
      .goodInput {
        position: relative;
        border-radius: 5px;
        height: 50px;
        width: 200px;
        text-align: center;
      }
      #forceChatBtn {
        position: relative;
        left: 40px;
        height: 50px;
        border-radius: 0;
        position: relative;
        background-color: #dbdbdb;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        font-weight: bold;
        font-size: large;
        box-shadow: 0px 0px 5px gold;
        color: red;
      }
      button:hover {
        box-shadow: 0px 0px 5px red;
      }
      input:hover {
        box-shadow: 0px 0px 5px blue;
      }
      .voteKickMessage {
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
      #command {
        position: relative;
        left: 20px;
        border-radius: 5px;
        height: 50px;
        width: 400px;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 15px;
      }
      #sendCommandBtn {
        position: relative;
        left: 40px;
        height: 50px;
        border-radius: 0;
        position: relative;
        background-color: #dbdbdb;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        font-weight: bold;
        width: 200px;
      }
      #commandContainer {
        background-color: #dfdfdf;
        width: 680px;
      }
      .goodBtn {
        background-color: rgb(224, 224, 224);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border-radius: 0;
        width: 100px;
        height: 50px;
        position: relative;
      }
      #showDirectMessages {
        position: relative;
        margin-bottom: 10px;
        width: 130px;
        height: 60px;
      }
      #directMsg {
        position: fixed;
        z-index: 1000;
        top: 0;
        background-color: rgb(224, 224, 224);
        height: 70px;
        width: 100%;
        margin-bottom: 20px;
        overflow-x: scroll;
        overflow-y: hidden;
        border: 4px solid #5865F2;
      }
      #toggleDirectMsgVisibility {
        position: relative;
        bottom: 10px;
        left: 1000px;
        height: 30px;
        font-size: normal;
        width: 300px;
      }
      #wiki {
        position: relative;
        width: 220px;
        height: 50px;
        box-shadow: none;
        border: none;
        color: rgb(99, 99, 99);
      }
      #showUploadedFiles {
        width: 300px;
        height: 40px;
      }
      .fileMessage {
        position: relative;
        right: 0;
      }
      #fileUploads {
        position: absolute;
        width: 350px;
        height: 300px;
        overflow-y: scroll;
        padding-bottom: 20px;
      }
      #forceChangeName {
        position: relative;
        left: 20px;
      }
      #forceChangeNameBtn {
        position: relative;
        left: 20px;
        width: 200px;
      }
      #secretAdmin {
        position: relative;
        height: 20px;
        width: 20px;
        top: 150px;
        left: 60px;
      }
      .directMsgBtns {
        display: inline;
        border-radius: 10px;
        height: 40px;
        width: 200px;
        font-size: 15px;
        background-color: white;
        margin: 5px;
        box-shadow: 4px 4px 6px gray;
        border: none;
      }
      .directMsgBtns:active {
        background-color: rgb(39, 39, 39);
        color:white;
      }
      .directMsgBtns:hover {
        background-color: rgb(39, 39, 39);
        color:white;
        box-shadow: 4px 4px 6px gray;
      }
      #blackMsgBoxColour {
        margin-top: 5px;
        background-color: #000000;
        position: relative;
        box-shadow: none;
      }
      #redMsgBoxColour {
        background-color: red;
        position: relative;
        box-shadow: none;
      }
      #yellowMsgBoxColour {
        background-color: yellow;
        position: relative;
        box-shadow: none;
      }
      #greenMsgBoxColour {
        background-color: green;
        position: relative;
        box-shadow: none;
      }
      #blueMsgBoxColour {
        background-color: blue;
        position: relative;
        box-shadow: none;
      }
      #pinkMsgBoxColour {
        background-color: rgb(242, 96, 255);
        position: relative;
        box-shadow: none;
      }
      #purpleMsgBoxColour {
        background-color: purple;
        position: relative;
        box-shadow: none;
      }
      #blackChatMessageTextColour {
        margin-top: 5px;
        background-color: #000000;
        position: relative;
        box-shadow: none;
      }
      #redChatMessageTextColour {
        background-color: red;
        position: relative;
        box-shadow: none;
      }
      #yellowChatMessageTextColour {
        background-color: yellow;
        position: relative;
        box-shadow: none;
      }
      #greenChatMessageTextColour {
        background-color: green;
        position: relative;
        box-shadow: none;
      }
      #blueChatMessageTextColour {
        background-color: blue;
        position: relative;
        box-shadow: none;
      }
      #pinkChatMessageTextColour {
        background-color: rgb(242, 96, 255);
        position: relative;
        box-shadow: none;
      }
      #purpleChatMessageTextColour {
        background-color: purple;
        position: relative;
        box-shadow: none;
      }
      .black {
        color: black;
      }
      .red {
        color: red;
      }
      .yellow {
        color: yellow;
      }
      .green {
        color: green;
      }
      .pink {
        color: rgb(242, 96, 255);
      }
      .blue{
        color: blue;
      }
      .purple{
        color: purple;
      }

      .backgroundblack {
        background-color: black;
      }
      .backgroundred {
        background-color: red;
      }
      .backgroundyellow {
        background-color: yellow;
      }
      .backgroundgreen {
        background-color: green;
      }
      .backgroundpink {
        background-color: rgb(242, 96, 255);
      }
      .backgroundblue{
        background-color: blue;
      }
      .backgroundpurple{
        background-color: purple;
      }
      #updateLog {
        position: relative;
        width: 220px;
        height: 50px;
        border: none;
        color: rgb(99, 99, 99);
      }
      #rightSideBarContainer {
        position: fixed;
        z-index: 1001;
        text-align: center;
        background-color: rgb(206, 206, 206);
        border-left: 4px solid #5865F2;
        top: 0;
        left: 1305px;
        width: 210px;
        height: 100%
      }
      .rightSideBarElement{
        position: relative;
        width: 220px;
        height: 50px;
        border: none;
        color: rgb(99, 99, 99);
      }
      .rightSideBarElement:hover{
        background-color: rgb(230, 230, 230);
        box-shadow: none;
      }
      #adminPanelBtn {
        position: relative;
        width: 220px;
        margin-top: 5px;
        border: none;
        margin-top: -10px;
        color: rgb(99, 99, 99);
      }
      #moderatorPanel{
        width: 200px;
        margin-top: 5px;
        border-radius: 15px;
        border: none;
        margin-top: 10px;
        color: rgb(99, 99, 99);
        box-shadow: 4px 4px 6px gray;
      }
      #selectFile{
        background-color: rgb(0, 208, 255);
        height: 50px;
        width: 50px;
        padding: 10px;
        font-size: larger;
        cursor: pointer;
        border: 4px solid black;
      }
      .senderMessageContainer{
        position: relative;
        align-content: center;
      }
      .emojiBtn{
        height: 50px;
        width: 50px;
        padding: 10px;
        font-size: larger;
        text-align: center;
        cursor: pointer;
        border-radius: 5px;
        background-color: white;
        border: none;
        box-shadow: none;
      }
      .emojiBtn:hover{
        background-color: rgb(234, 234, 234);
        box-shadow: none;
      }
      #emojis{
        position: absolute;
        right: 450px;
        top: 790px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 0px 6px gray;
        border-radius: 15px;
        height: 300px;
        width: 380px;
        display: inline-grid;
      }
      #showEmojisBtn{
        position: absolute;
        right: 775px;
        top: 720px;
        height: 50px;
        width: 55px;
        background-color: white;
        border: none;
        box-shadow: none;
        font-size: 50px;
      }
      #test{
        clip-path: polygon(71% 78%, 63% 85%, 55% 70%);
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div id="directMsg"></div>
    <button id="toggleDirectMsgVisibility" class="goodBtn">
      Show / Hide Direct Messages
    </button>
    <div id="chat-display" readonly style="border-width: 2px"></div>
    <form id="chat-form">
      <textarea id="chat-input" type="text" autocomplete="off" contenteditable="on" placeholder="Type a message..."></textarea>
      <button id="send" type="submit">Send</button>
    </form>
    <div id="commandContainer">
      <input
        type="text"
        id="command"
        placeholder="command | Type /help for help" />
      <button id="sendCommandBtn">Send Command</button>
    </div>
    <button id="showEmojisBtn" class="goodBtn">🙂</button>
    <div id="emojis" style="display: none;">
      <div id="test"></div>
      <button id="smile" class="emojiBtn goodBtn" title="smile">😀</button>
      <button id="grinning" class="emojiBtn goodBtn" title="grinning">🙂</button>
      <button id="laughing" class="emojiBtn goodBtn" title="laughing">🤣</button>
      <button id="coolGuy" class="emojiBtn goodBtn" title="coolGuy">😎</button>
      <button id="sad" class="emojiBtn goodBtn" title="sad">🙁</button>
      <button id="panic" class="emojiBtn goodBtn" title="panic">😱</button>
      <button id="crying" class="emojiBtn goodBtn" title="crying">😭</button>
      <button id="disgust" class="emojiBtn goodBtn" title="disgust">🤮</button>
      <button id="skull" class="emojiBtn goodBtn" title="skull">💀</button>
      <button id="eye" class="emojiBtn goodBtn" title="eye">👀</button>
      <button id="thumbsup" class="emojiBtn goodBtn" title="thumbsup">👍</button>
      <button id="thumbsdown" class="emojiBtn goodBtn" title="thumbsdown">👎</button>
      <button id="poo" class="emojiBtn goodBtn" title="poo">💩</button>
      <button id="apple" class="emojiBtn goodBtn" title="apple">🍏</button>
      <button id="banana" class="emojiBtn goodBtn" title="banana">🍌</button>
      <button id="pizza" class="emojiBtn goodBtn" title="pizza">🍕</button>
      <button id="chips" class="emojiBtn goodBtn" title="chips">🍟</button>
      <button id="hamburger" class="emojiBtn goodBtn" title="hamburger">🍔</button>
      <button id="bone" class="emojiBtn goodBtn" title="bone">🦴</button>
    </div>
    
    <div id="rightSideBarContainer">
    <br>
    <button id="moderatorPanel" class="goodBtn rightSideBarElement" style="display: none;">Moderator Panel</button>
    <button id="adminPanelBtn" class="goodBtn rightSideBarElement" style="display: none">Admin Panel</button>
    <button id="accountBtn" class="goodBtn rightSideBarElement">Account</button>
    <button id="updateLog" class="goodBtn rightSideBarElement">Update Log</button>
    <button id="wiki" class="goodBtn rightSideBarElement">Help Wiki</button>
    <input type="text" id="room" placeholder="Join Room" />
    <input type="text" id="roomLeave" placeholder="Leave Room">
    <input placeholder="username" id="username" autocomplete="off" type="username" class="rightSideBarElement">
    <div id="textMessageColour">
    <button id="blackChatMessageTextColour"style="height: 50px; width: 50px"></button>
    <button id="redChatMessageTextColour"style="height: 50px; width: 50px"></button>
    <button id="yellowChatMessageTextColour"style="height: 50px; width: 50px"></button>
    <button id="greenChatMessageTextColour"style="height: 50px; width: 50px"></button>
    <br>
    <button id="pinkChatMessageTextColour" style="height: 50px; width: 50px"></button>
    <button id="blueChatMessageTextColour" style="height: 50px; width: 50px"></button>
    <button id="purpleChatMessageTextColour" style="height: 50px; width: 50px"></button>
    </div>
    <div id="msgBoxColour">
      <button id="blackMsgBoxColour"style="height: 50px; width: 50px"></button>
      <button id="redMsgBoxColour"style="height: 50px; width: 50px"></button>
      <button id="yellowMsgBoxColour"style="height: 50px; width: 50px"></button>
      <button id="greenMsgBoxColour"style="height: 50px; width: 50px"></button>
      <br>
      <button id="pinkMsgBoxColour" style="height: 50px; width: 50px"></button>
      <button id="blueMsgBoxColour" style="height: 50px; width: 50px"></button>
      <button id="purpleMsgBoxColour" style="height: 50px; width: 50px"></button>
      </div>
    <button id="secretAdmin" class="goodBtn"></button>
    </div>
    
    <div id="voteKickDiv" style="display: none">
      <button id="acceptKick">Accept Kick</button>
      <button id="rejectKick">Reject Kick</button>
    </div>
    <br />
    <input type="file" id="file-input" style="display:none">
    <label id="selectFile" for="file-input">Select File</label>
    <div id="progressContainer">
      <div
        id="progressBar"
        style="width: 1%; height: 20px; background-color: lime"></div>
    </div>
    <button id="showUploadedFiles" class="goodBtn">Show Uploaded Files</button>
    <div id="fileUploads" style="display: none">
      <div id="uploadedFiles"></div>
    </div>
    <div id="userInfo" style="display: none;"><br />
      <input
        type="password"
        id="password"
        placeholder="password*"
        autocomplete="off" />
      <br />
      <button id="loginBtn">Login</button>
    </div>
    <pre id="userOnline">
Users online: 
0</pre
    >
    <p id="usersOnlineNames"></p>
    <button id="joinRoom">join room</button>
    <br />
    <button id="leaveRoom">leave room</button>
    <br />
    <br />
    <hr />
    <h2 id="settings">SETTINGS</h2>
    <div id="background-color-mode">
      <button id="darkMode">Dark Mode</button>
      <button id="lightMode">Light Mode</button>
    </div>
    <pre>
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </pre>
    <div id="Messages">
      <h3 id="messageSettings">Message Settings</h3>
      <button id="clearAllMsg">Clear All Messages</button>
      <button id="removeLastMsg">Remove Last Message</button>
    </div>
    <hr />
    <div id="AdminUIContainer" style="display: none">
      <h3 id="adminUI" style="color: red">Moderator Panel</h3>
      <input type="text" placeholder="username to kick" id="targetUser" />
      <button id="kickUserButton">Kick User</button>
      <br />
      <div id="force-chat">
        <input type="text" placeholder="message" id="forceChatMsg" />
        <input type="text" placeholder="name" id="forceChatName" />
        <button id="forceChatBtn">Force Chat</button>
        <div id="secretAdminDiv" style="display: none">
          <input
            type="text"
            id="currentName"
            placeholder="Current Name"
            class="goodInput" />
          <input
            type="text"
            id="forceChangeName"
            placeholder="Force Change Name"
            class="goodInput" />
          <button id="forceChangeNameBtn" class="goodBtn">Change Name</button>
        </div>
      </div>
    </div>

    <script src="https://cdn.socket.io/4.5.4/socket.io.js"></script>
    <script src="index.cjs"></script>
    <script src="client.js"></script>
  </body>
</html>
