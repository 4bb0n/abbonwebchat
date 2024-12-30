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
      const toggleVisibilityDirectMsgBtn = document.getElementById(
        "toggleDirectMsgVisibility"
      );
      const wikiBtn = document.getElementById("wiki");
      const showUploadedFilesBtn = document.getElementById("showUploadedFiles");
      const fileUploads = document.getElementById("fileUploads");
      const secretAdminBtn = document.getElementById("secretAdmin");
      const secretAdminDiv = document.getElementById("secretAdminDIv");
      const forceChangeName = document.getElementById("forceChangeName");
      const currentName = document.getElementById("currentName");
      const changeNameBtn = document.getElementById("forceChangeNameBtn");
      const blackChatMessageTextColour = document.getElementById("blackChatMessageTextColour");
      const redChatMessageTextColour = document.getElementById("redChatMessageTextColour");
      const greenChatMessageTextColour = document.getElementById("greenChatMessageTextColour");
      const yellowChatMessageTextColour = document.getElementById("yellowChatMessageTextColour");
      const pinkChatMessageTextColour = document.getElementById("pinkChatMessageTextColour");
      const blueChatMessageTextColour = document.getElementById("blueChatMessageTextColour");
      const purpleChatMessageTextColour = document.getElementById("purpleChatMessageTextColour");
      const showUpdateLogBtn = document.getElementById("updateLog");
      const accountBtn = document.getElementById("accountBtn");
      const adminPanelBtn = document.getElementById("adminPanelBtn");
      const showEmojisBtn = document.getElementById("showEmojisBtn");
      let directMsgPerson = "";
      let targetDirectMsgPerson = "";
      let voteName = "";
      let toggleVisibilityDirectMsgBtnVAR = 1;
      let appendMessageOrder = 0;
      let toggleVisibilitySecretAdmin = 0;
      let adminPerm = false;
      let chatMessageTextColour = "";
      let msgBoxColour = "";

      //speech box colour
      document.getElementById("blackMsgBoxColour").addEventListener("click", () => {msgBoxColour = "black"; appendMessage(`Your message box colour is now ${msgBoxColour}`);})
      document.getElementById("redMsgBoxColour").addEventListener("click", () => {msgBoxColour = "red"; appendMessage(`Your message box colour is now ${msgBoxColour}`);})
      document.getElementById("yellowMsgBoxColour").addEventListener("click", () => {msgBoxColour = "yellow"; appendMessage(`Your message box colour is now ${msgBoxColour}`);})
      document.getElementById("greenMsgBoxColour").addEventListener("click", () => {msgBoxColour = "green"; appendMessage(`Your message box colour is now ${msgBoxColour}`);})
      document.getElementById("pinkMsgBoxColour").addEventListener("click", () => {msgBoxColour = "pink"; appendMessage(`Your message box colour is now ${msgBoxColour}`);})
      document.getElementById("blueMsgBoxColour").addEventListener("click", () => {msgBoxColour = "blue"; appendMessage(`Your message box colour is now ${msgBoxColour}`);})
      document.getElementById("purpleMsgBoxColour").addEventListener("click", () => {msgBoxColour = "purple"; appendMessage(`Your message box colour is now ${msgBoxColour}`);})
      //emojis!
      document.getElementById("smile").onclick = () => {input.value += "😀"};
      document.getElementById("grinning").onclick = () => {input.value += "🙂"};
      document.getElementById("laughing").onclick = () => {input.value += "🤣"};
      document.getElementById("sad").onclick = () => {input.value += "🙁"};
      document.getElementById("panic").onclick = () => {input.value += "😱"};
      document.getElementById("thumbsup").onclick = () => {input.value += "👍"};
      document.getElementById("thumbsdown").onclick = () => {input.value += "👎"};
      document.getElementById("crying").onclick = () => {input.value += "😭"};
      document.getElementById("skull").onclick = () => {input.value += "💀"};
      document.getElementById("poo").onclick = () => {input.value += "💩"};
      document.getElementById("apple").onclick = () => {input.value += "🍏"};
      document.getElementById("banana").onclick = () => {input.value += "🍌"};
      document.getElementById("pizza").onclick = () => {input.value += "🍕"};
      document.getElementById("chips").onclick = () => {input.value += "🍟"};
      document.getElementById("hamburger").onclick = () => {input.value += "🍔"};
      document.getElementById("bone").onclick = () => {input.value += "🦴"};
      document.getElementById("disgust").onclick = () => {input.value += "🤮"};
      document.getElementById("coolGuy").onclick = () => {input.value += "😎"};
      document.getElementById("eye").onclick = () => {input.value += "👀"};
      document.getElementById("emojis").onmouseleave = () => {
        document.getElementById("emojis").style.display = "none";
      }
      showEmojisBtn.addEventListener("mouseover", () => {
        document.getElementById("emojis").style.display = "block";
      })

      sendBtn.addEventListener("click", () => {
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
        .replaceAll("bitch", "*FORBIDDEN WORD*");
      const username = usernameInput.value;
      const senderMessage = input.value;
      const newMessage = addMessage("sender", "YOU: " + senderMessage);
      appendSenderMessage(newMessage.content);
      const room = document.getElementById("room").value;
      socket.emit("chat message",`${username} : ${senderMessage}`, room, directMsgPerson, chatMessageTextColour, msgBoxColour);
      input.value = "";
      chatDisplay.scrollTop = chatDisplay.scrollHeight;
      })

      socket.on("checkIfMissedMessages", (msg) => {
        appendMessage(msg);
        addMessage("received", msg);
      })

      socket.on("checkIfMissedMessagesName", () => {
        socket.emit("checkIfMissedMessages", username.value);
      })
      document.getElementById("moderatorPanel").addEventListener("click", () => {
        window.open("moderatorPanel.html", "_self");
      })

      roomLeave.addEventListener("keypress", e => {
        if (e.key === "Enter") {
          leaveRoom.click();
          roomLeave.value = "";
        }
      });

      room.addEventListener("keypress", e => {
        if (e.key === "Enter") {
          joinRoom.click();
          room.value = "";
        }
      });

      socket.on("chat message5", (msg, desUsername, textColour) => {
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
          .replaceAll("FUCK", "*FORBIDDEN WORD*");
        if (desUsername == username.value) {
          console.log("direct message received");
          const newMessage = addMessage("received", msg);
          appendMessage(newMessage.content);
        } else if (desUsername == "") {
          console.log("global message received");
          const newMessage = addMessage("received", msg);
          appendMessage(newMessage.content, textColour);
        }
      });

      adminPanelBtn.addEventListener("click", () => {
        window.open("/adminPanel.html","_self")
      })

      accountBtn.addEventListener("click", () => {
        window.open("/account.html","_self")
      })

      showUpdateLogBtn.addEventListener("click", () => {
        window.open("https://github.com/4bb0n/abbonwebchat/commits/main/")
      })

      purpleChatMessageTextColour.addEventListener("click", () => {
        chatMessageTextColour = "purple";
        appendMessage(
          `Your chat message text colour is now ${chatMessageTextColour}`
        );
      })

      blueChatMessageTextColour.addEventListener("click", () => {
        chatMessageTextColour = "blue";
        appendMessage(
          `Your chat message text colour is now ${chatMessageTextColour}`
        );
      })

      pinkChatMessageTextColour.addEventListener("click", () => {
        chatMessageTextColour = "pink";
        appendMessage(
          `Your chat message text colour is now ${chatMessageTextColour}`
        );
      })

      yellowChatMessageTextColour.addEventListener("click", () => {
        chatMessageTextColour = "yellow";
        appendMessage(
          `Your chat message text colour is now ${chatMessageTextColour}`
        );
      })

      greenChatMessageTextColour.addEventListener("click", () => {
        chatMessageTextColour = "green";
        appendMessage(
          `Your chat message text colour is now ${chatMessageTextColour}`
        );
      });

      redChatMessageTextColour.addEventListener("click", () => {
        chatMessageTextColour = "red";
        appendMessage(
          `Your chat message text colour is now ${chatMessageTextColour}`
        );
      })

      blackChatMessageTextColour.addEventListener("click", () => {
        chatMessageTextColour = "black";
        appendMessage(
          `Your chat message text colour is now ${chatMessageTextColour}`
        );
      });

      socket.on("chat message4", (msg) => {
        appendMessage(msg);
      });

      socket.on("userIsBanned", () => {
        appendMessage(
          `You are still banned from the chat. If you wish to be unbanned, please click the appeal button below.`
        );
        socket.emit("force disconnect", username.value);
        const button = document.createElement("button");
        button.textContent = "Appeal Ban";
        button.classList.add("goodBtn");
        button.addEventListener("click", () => {
          window.open("https://forms.gle/4FFx2cPgCp1JGVjM6", "_self");
        });
        chatDisplay.appendChild(button);
        setTimeout(() => {
          window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_self");
        }, 6000);
      });

      socket.on("getNameServer", () => {
        socket.emit("getNameServer", username.value);
      });

      socket.on("userBannedBroadcast", (banVictim, banDuration, banReason) => {
        appendKickMessage(
          `${banVictim} has been banned for ${banDuration} seconds for ${banReason}`
        );
      });

      socket.on("banCommand", (banVictim, banDuration, banReason) => {
        if (banVictim == username.value) {
          appendMessage(
            `You have been banned for ${banDuration} seconds for ${banReason}`
          );
          socket.emit("userBanned", username.value, banDuration, banReason);
          socket.emit("force disconnect", username.value);
          const button = document.createElement("button");
          button.textContent = "Appeal Ban";
          button.classList.add("goodBtn");
          button.addEventListener("click", () => {
            window.open("https://forms.gle/4FFx2cPgCp1JGVjM6", "_self");
          });
          chatDisplay.appendChild(button);
          setTimeout(() => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_self");
          }, 5000);
        }
      });
      function getName() {
        socket.emit("get-name-function");
      }

      socket.on("getUsersOnlineCheck", () => {
        socket.emit("returnUsersOnlineCheck", username.value);
      });

      socket.on("updateOnlineUsers2", (users) => {
        let arr = [...new Set(users)];
        setTimeout(() => {
          arr.forEach((user) => {
            const button = document.createElement("button");
            button.textContent = user;
            button.classList.add("directMsgBtns");
            directMsgDiv.appendChild(button);
            button.addEventListener("click", () => {
                chatDisplay.textContent = "";
                setTimeout(() => {
                  appendMessage("You are now talking to " + user);
                }, 1000);
              directMsgPerson = user;
            });
          });
        }, 2000);
      });

      socket.on("forceChangeNameCheck", (curName, nameToChange) => {
        if (username.value == curName) {
          username.value = nameToChange;
          localStorage.setItem("username", nameToChange);
          window.location.reload();
        }
      });

      changeNameBtn.addEventListener("click", () => {
        const currentName = document.getElementById("currentName").value;
        const forceChangeName =
          document.getElementById("forceChangeName").value;
        socket.emit("forceChangeName", currentName, forceChangeName);
      });

      secretAdminBtn.addEventListener("click", () => {
        if (toggleVisibilitySecretAdmin == 0) {
          document.getElementById("secretAdminDiv").style.display = "block";
          toggleVisibilitySecretAdmin++;
        } else {
          document.getElementById("secretAdminDiv").style.display = "none";
          toggleVisibilitySecretAdmin--;
        }
      });

      showUploadedFilesBtn.onmouseover = () => {
        document.getElementById("fileUploads").style.display = "block";
        document.getElementById("fileUploads").style.backgroundColor =
          "lightgray";
      };
      fileUploads.onmouseleave = () => {
        document.getElementById("fileUploads").style.display = "none";
        document.getElementById("fileUploads").style.backgroundColor = "white";
      };

      wikiBtn.addEventListener("click", () => {
        window.open("/info.html", "_self");
      });

      toggleVisibilityDirectMsgBtn.addEventListener("click", () => {
        if (toggleVisibilityDirectMsgBtnVAR == 1) {
          directMsgDiv.style.display = "none";
          toggleVisibilityDirectMsgBtnVAR -= 1;
        } else {
          directMsgDiv.style.display = "inherit";
          directMsgDiv.style.backgroundColor = "#b0b1ff";
          directMsgDiv.style.width = "100%";
          directMsgDiv.style.height = "100px";
          directMsgDiv.style.marginBottom = "20px";
          toggleVisibilityDirectMsgBtnVAR += 1;
        }
      });

      socket.on("connected", (username) => {
        const button = document.createElement("button");
        button.textContent = username;
        button.classList.add("directMsgBtns");
        directMsgDiv.appendChild(button);
        button.addEventListener("click", () => {
          chatDisplay.textContent = "";
          setTimeout(() => {
            appendMessage("You are now talking to " + user);
          }, 1000);
          directMsgPerson = username;
        });
      });

      socket.on("online mail", (destinationUsername, message) => {
        if (username.value == destinationUsername) {
          appendMessage(`Mail from ${destinationUsername}: ${message}`);
        }
      });

      socket.on(
        "mailSentNotificationCommand",
        (destinationUsername, message) => {
          appendMessage(`Mail sent to ${destinationUsername}: ${message}`);
        }
      );

      socket.on("clearMessagesCommand", () => {
        clearAllMsg.click();
      });

      socket.on("lightModeCommand", () => {
        lightMode.click();
      });

      socket.on("darkModeCommand", () => {
        darkMode.click();
      });

      socket.on("changeNameCommand", (name) => {
        appendMessage("Name changed to " + name);
        username.value = name;
      });

      socket.on("unknown command", () => {
        appendMessage("Unknown command");
      });

      socket.on("updateOnlineUsers", (onlineUsers) => {
        let tempArray2 = [...new Set(onlineUsers)];
        usersOnlineNames.textContent = tempArray2[0];
        if (!usersOnlineNames.textContent == "") {
          usersOnlineNames += tempArray2[-1];
        }
      });

      socket.on("checkWhoIsOnline", () => {
        socket.emit("checkWhoIsOnline", username.value);
      });

      socket.on("help command", () => {
        appendMessage(
          `Commands: /votekick, /joincustomroom, /leaveroom, /mail, /help, /changename, /clearMsg, /darkMode, /lightMode`
        );
      });

      socket.on("get-name", () => {
        socket.emit("get-name", username.value);
      });

      socket.on("get name", () => {
        socket.emit("name return", username.value);
      });

      socket.on("leave room", (room) => {
        document.getElementById("roomLeave").value = room;
        leaveRoom.click();
      });

      socket.on("join room", (room) => {
        document.getElementById("room").value = room;
        joinRoom.click();
      });

      socket.on("voteKickDraw", (username) => {
        appendKickMessage(`Vote kick drew for ${username}!`);
      });

      socket.on("voteKickAccepted", (username) => {
        const name = document.getElementById("username").value;
        appendKickMessage(
          `${username} has been kicked! Majority agreed to kick!`
        );
        socket.emit("kick-user", username);
      });

      socket.on("voteKickRejected", (username) => {
        appendKickMessage(
          `${username} has been kicked! Majority disagreed to kick!`
        );
      });

      acceptKickBtn.addEventListener("click", () => {
        socket.emit("chat message3", `${username.value} has voted to kick!`);
        socket.emit("kickAccepted", voteName);
        appendMessage("You have voted to kick!");
        voteKickDiv.style.display = "none";
      });
      rejectKick.addEventListener("click", () => {
        socket.emit(
          "chat message3",
          `${username.value} has rejected the kick!`
        );
        socket.emit("kickRejected", voteName);
        appendMessage("You have rejected the kick!");
        voteKickDiv.style.display = "none";
      });
      socket.on("voteKickNameMatched", (username) => {
        appendMessage(
          `${username} has been voted to kick! Majority is needed to complete the kick!`
        );
        const voteKickDiv = document.getElementById("voteKickDiv");
        voteName = username;
        voteKickDiv.style.display = "initial";
      });

      socket.on("votekick", (username) => {
        if (username == usernameInput.value) {
          socket.emit("voteKickNameMatched", username);
        }
      });

      command.onkeydown = (e) => {
        if (e.key === "Enter") {
          const command = document.getElementById("command").value;
          socket.emit("command", command, username.value, adminPerm);
          document.getElementById("command").value = "";
        }
      };

      sendCommandBtn.addEventListener("click", () => {
        const command = document.getElementById("command").value;
        socket.emit("command", command, username.values, adminPerm);
        document.getElementById("command").value = "";
      });

      socket.on("disconnected", (numUser, date) => {
        appendMessage(
          `A user disconnected on ${date}, ${numUser} users online`
        );
      });

      forceChatBtn.addEventListener("click", () => {
        const name = document.getElementById("forceChatName").value;
        const msg = forceChatMsg.value;
        if (forceChatMsg.value) {
          socket.emit("force chat", msg, name);
          forceChatMsg.value = "";
        } else {
          alert("Please Type in your force chat message! It can't be blank!");
        }
      });

      socket.on("force chat name check", (msg, name) => {
        const username = document.getElementById("username").value;
        if (username == name) {
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
            .replaceAll("$IGMA", "*FORBIDDEN WORD*")
            .replaceAll("$KIBIDI", "*FORBIDDEN WORD*")
            //please, forgive me but I have to ban it! I have to write it down
            .replaceAll("fuck", "*FORBIDDEN WORD*")
            .replaceAll("shit", "*FORBIDDEN WORD*")
            .replaceAll("bitch", "*FORBIDDEN WORD*");
          const username = usernameInput.value;
          const senderMessage = msg;
          const newMessage = addMessage("sender", "YOU: " + senderMessage);
          appendSenderMessage(newMessage.content);
          const room = document.getElementById("room").value;
          socket.emit("chat message",`${username} : ${senderMessage}`, room, directMsgPerson, chatMessageTextColour, msgBoxColour);
          input.value = "";
          chatDisplay.scrollTop = chatDisplay.scrollHeight;
        }
      });

      socket.on("getName", () => {
        const username = document.getElementById("username").value;
        socket.emit("getName2", username, socket.id);
      });

      leaveRoom.addEventListener("click", () => {
        if (roomLeave.value) {
          socket.emit("leave room", roomLeave.value);
          appendMessage(`You have left room: ${roomLeave.value}`);
        } else {
          appendMessage("Please enter a room name!");
        }
      });

      joinRoom.addEventListener("click", () => {
        if (room.value) {
          socket.emit("join room", room.value);
          appendMessage(`You have joined room: ${room.value}`);
        } else {
          appendMessage("Please enter a room name!");
        }
      });

      socket.on("user count", (numUser) => {
        document.getElementById("userOnline").textContent = `Users online:
${numUser}`;
      });

      function showNotification(msg) {
        const username = msg.split(" :")[0]; // Extract username from msg
        const messageContent = msg.split(":").slice(1).join(":").trim(); // Extract message content
        if (Notification.permission === "granted") {
          let notifi = new Notification(`New message from ${username.value}`, {
            body: messageContent,
            tag: "chat message",
          });
          console.log("Notification sent");
          setTimeout(() => {
            notifi.close();
          }, 2000);
        }
      }

      clearAllMsg.addEventListener("click", () => {
        localStorage.removeItem("chatMessages");
        chatDisplay.innerHTML = "Message Cleared";
      });

      removeLastMsg.addEventListener("click", () => {
        const messages = loadMessagesFromLocalStorage();
        if (messages.length > 0) {
          messages.pop();
          saveMessagesToLocalStorage(messages);
          const removedLastMsgWarning = document.createElement("p");
          removedLastMsgWarning.textContent = "[Last Message Removed]";
          chatDisplay.appendChild(removedLastMsgWarning);
          document.getElementsByClassName("senderMessage").pop().remove();
        }
      });

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
      socket.on("chat message", (msg, desUsername, textColour, boxColour) => {
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
          .replaceAll("FUCK", "*FORBIDDEN WORD*");
          let senderName = msg.split(" :")[0]
          let soundEffect = new Audio("chatSoundEffect.mp3")
        if (desUsername == username.value) {
          console.log("direct message received");
          const newMessage = addMessage("received", msg);
          appendMessage(newMessage.content, textColour, boxColour);
          showNotification(msg);
          soundEffect.play()
        } else if (desUsername == "") {
          console.log("global message received");
          const newMessage = addMessage("received", msg);
          appendMessage(newMessage.content, textColour, boxColour);
          showNotification(msg);
          soundEffect.cloneNode.play()
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
          .replaceAll("undefinedMail ", "");
        const newMessage = addMessage("received", msg);
        appendMessage(newMessage.content);
      });
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && event.shiftKey === false && input.value) {
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
            socket.emit("chat message",`${username} : ${senderMessage}`, room, directMsgPerson, chatMessageTextColour, msgBoxColour);
            input.value = "";
            chatDisplay.scrollTop = chatDisplay.scrollHeight;
            }
        }
      })
      form.addEventListener("submit", (event) => {
        event.preventDefault();
      });

      function removeBrainRot(msg) {
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
          .replaceAll("undefinedMail ", "");
        return msg;
      }

      function appendMessage(msg, textColour, boxColour) {
        const chatDisplay = document.getElementById("chat-display");
        const receivedMessageContainer = document.createElement("div");
        const newMessage = document.createElement("div");
        receivedMessageContainer.classList.add("receivedMessageContainer");
        receivedMessageContainer.appendChild(newMessage)
        newMessage.classList.add("newMessage");
        switch (textColour) {
            case "black":
              newMessage.classList.add("black");
              break;
            case "white":
              newMessage.classList.add("white");
              break;
            case "red":
              newMessage.classList.add("red");
              break;
            case "green":
              newMessage.classList.add("green");
              break;
            case "blue":
              newMessage.classList.add("blue");
              break;
            case "yellow":
              newMessage.classList.add("yellow");
              break;
            case "pink":
              newMessage.classList.add("pink");
              break;
            case "purple":
              newMessage.classList.add("purple");
              break;
          }
          switch (boxColour) {
            case "black":
              newMessage.classList.add("backgroundblack");
              break;
            case "white":
              newMessage.classList.add("backgroundwhite");
              break;
            case "red":
              newMessage.classList.add("backgroundred");
              break;
            case "green":
              newMessage.classList.add("backgroundgreen");
              break;
            case "blue":
              newMessage.classList.add("backgroundblue");
              break;
            case "yellow":
              newMessage.classList.add("backgroundyellow");
              break;
            case "pink":
              newMessage.classList.add("backgroundpink");
              break;
            case "purple":
              newMessage.classList.add("backgroundpurple");
              break;
          }
          console.log(boxColour)
        chatDisplay.appendChild(receivedMessageContainer);
        newMessage.innerHTML = msg;
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
      }

      function appendSenderMessage(msg) {
        const chatDisplay = document.getElementById("chat-display");
        const newMessage = document.createElement("div");
        const newMessageContainer = document.createElement("div");
        const deleteBtn = document.createElement("button");
        newMessageContainer.classList.add("senderMessageContainer");
        newMessageContainer.appendChild(newMessage);
        newMessage.classList.add("senderMessage");
        switch (chatMessageTextColour) {
          case "black":
              newMessage.classList.add("black");
              break;
            case "white":
              newMessage.classList.add("white");
              break;
            case "red":
              newMessage.classList.add("red");
              break;
            case "green":
              newMessage.classList.add("green");
              break;
            case "blue":
              newMessage.classList.add("blue");
              break;
            case "yellow":
              newMessage.classList.add("yellow");
              break;
            case "pink":
              newMessage.classList.add("pink");
              break;
            case "purple":
              newMessage.classList.add("purple");
              break;
        }
            switch (msgBoxColour) {
                case "black":
                    newMessage.style.backgroundImage = "none";
                    newMessage.classList.add("backgroundblack");
                    break;
                case "white":
                    newMessage.style.backgroundImage = "none";
                    newMessage.classList.add("backgroundwhite");
                    break;
                case "red":
                    newMessage.classList.add("backgroundred");
                    newMessage.style.backgroundImage = "none";
                    break;
                case "green":
                    newMessage.classList.add("backgroundgreen");
                    newMessage.style.backgroundImage = "none";
                    break;
                case "blue":
                    newMessage.classList.add("backgroundblue");
                    newMessage.style.backgroundImage = "none";
                    break;
                case "yellow":
                    newMessage.classList.add("backgroundyellow");
                    newMessage.style.backgroundImage = "none";
                    break;
                case "pink":
                    newMessage.classList.add("backgroundpink");
                    newMessage.style.backgroundImage = "none";
                    break;
                case "purple":
                    newMessage.classList.add("backgroundpurple");
                    newMessage.style.backgroundImage = "none";
                    break;
            } 
        newMessage.contentEditable = true;
        let newerMessage = document.createElement("pre")
        newerMessage.innerHTML = msg;
        newMessage.appendChild(newerMessage)
        chatDisplay.appendChild(newMessageContainer);
        newMessage.textContent = msg;
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
      }
      function appendKickMessage(msg) {
        const chatDisplay = document.getElementById("chat-display");
        const newMessage = document.createElement("div");
        newMessage.classList.add("kickMessage");
        chatDisplay.appendChild(newMessage);
        newMessage.textContent = msg;
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
      }

      // Load and display messages when the page loads
      document.addEventListener("DOMContentLoaded", () => {
        const fileMessages = loadFileMessagesFromLocalStorage();
        const messages = loadMessagesFromLocalStorage();
        displayFileMessages(fileMessages);
        displayMessages(messages);
        const savedUsername = localStorage.getItem("username");
        if (savedUsername) {
          username.value = savedUsername;
        } else {
          socket.emit("get-name", username.value);
          if (!username.value) {
            username.value = "NoName";
          }
        }
        socket.emit("getUsersOnline");
        socket.emit("connected", username.value);
        const adminId = localStorage.getItem("adminId");
        if(adminId == "2405"){
        adminPermissions = true;
        adminPerm = true;
        document.getElementById("AdminUIContainer").style.display = "initial";
        document.getElementById("adminPanelBtn").style.display = "initial";
        appendMessage("You have admin permissions!");
        console.log('adminPermGranted')
        }
        else if(adminId == "moderator"){
          document.getElementById("AdminUIContainer").style.display = "initial";
          document.getElementById("moderatorPanel").style.display = "initial";
          appendMessage("You have moderator permissions!");
        }
        else{
          appendMessage("You have no permissions. (lowest permission level)");
        }
        socket.emit("join room", "Home")
      });

      // force kick packet receiver
      socket.on("new message notification", (msg, desUsername) => {
        if (desUsername == username.value) {
          let notification1 = new Notification(
            `New message from ${username.value}`,
            {
              body: msg,
              tag: "private message",
            }
          );
        } else if (desUsername == "") {
          let notification1 = new Notification(
            `New message from ${username.value}`,
            {
              body: msg,
              tag: "global message",
            }
          );
        }
      });

      socket.on(
        "sender message",
        setTimeout(() => {
          socket.emit("get socketID");
        }, 50)
      );
      socket.on("socket ID", (id) => {
        appendMessage(
          "You Joined on " +
            new Date() +
            " your id is:              \n \n " +
            id
        );
        const username = localStorage.getItem("username");
        socket.emit("userjoined", username, new Date());
        appendKickMessage(
          "IF YOU'RE NOT GETTING NOTIFICATION FROM MESSAGES, GO TO SETTINGS AND ENABLE IT GLOBALLY (and for google chrome if you forgot to!)"
        );
      });

      socket.on("userjoined", (username, time, id) => {
        appendMessage(`${username} has joined on ` + time + ". ID: " + id);
      });

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
        if (targetUser.value) {
          const targetUsername = targetUser.value;
          socket.emit("kick-user", targetUsername);
          appendKickMessage(`${targetUsername} has been kicked!`);
          addKickMessage("received", `${targetUsername} has been kicked!`);
        }
      };
      socket.on("kick-user", (targetUsername) => {
        kickUser(targetUsername);
      });
      function kickUser(targetUsername) {
        const username = document.getElementById("username").value;
        if (targetUsername == username) {
          let lastWords = window.prompt(
            "You're about to be kicked! Any last words?"
          );
          const rickroll = document.createElement("iframe");
          rickroll.src = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
          rickroll.classList.add("rickroll");
          rickroll.muted = true;
          rickroll.loop = true;
          rickroll.playsInline = true;
          chatDisplay.appendChild(rickroll);
          appendMessage(
            "You have been kicked / Disconnected! Refresh the page to join again!"
          );
          const targetUsername = targetUser.value;
          socket.emit("force disconnect", targetUsername);
          window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_self");
        }
      }
      socket.on(
        "force disconnect broadcast alert message",
        (targetUsername) => {
          appendKickMessage(targetUsername + " has been kicked!");
        }
      );
      // Get the user's IPv4 address
      const getIPv4Address = () => {
        fetch("https://api.ipify.org?format=json")
          .then((response) => response.json())
          .then((data) => socket.emit("ip", data.ip))
          .catch((error) => console.error("Error fetching IP address:", error));
      };

      // Call the function to log the IPv4 address
      getIPv4Address();

      sendBtn.onclick = sendFile;

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
            const fileUrl = URL.createObjectURL(
              new Blob([
                new Uint8Array(
                  atob(fileContent)
                    .split("")
                    .map((c) => c.charCodeAt(0))
                ),
              ])
            );
            socket.emit("send-file", {
              fileName: file1.name,
              fileContent: fileContent,
            });

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
          console.error(
            "Error loading file messages from local storage:",
            error
          );
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
        let fileToDownload = msg.split("/").pop(); // Use the file name as the download name
        fileLink.textContent = msg;
        fileLink.href = (`/download/${fileToDownload}`);
        fileLink.download = msg.split("/").pop(); // Use the file name as the download name
        fileMessage.classList.add("fileMessage");
        fileMessage.appendChild(fileLink);
        document.getElementById("uploadedFiles").appendChild(fileMessage);
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
        const test = localStorage.getItem("fileMessages");
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
      });

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
      });

      socket.on("connection", () => {
        socket.emit("join", userID);
      });
