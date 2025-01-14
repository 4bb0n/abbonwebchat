      socket.on("user count", (numUser) => {
        document.getElementById("userOnline").textContent = `Users online:
${numUser}`;
      });
