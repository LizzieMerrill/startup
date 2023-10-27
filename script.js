const chatControls = document.querySelector('#chat-controls');
const myName = document.querySelector('#my-name');
myName.addEventListener('keyup', (e) => {
  chatControls.disabled = myName.value === '';
});

function appendMsg(cls, from, msg) {
    const chatText = document.querySelector('#chat-text');
    chatText.innerHTML = `<div><span class="${cls}">${from}</span>: ${msg}</div>` + chatText.innerHTML;
  }

  const input = document.querySelector('#new-msg');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });


  function sendMessage() {
    const msgEl = document.querySelector('#new-msg');
    const msg = msgEl.value;
    if (!!msg) {
      appendMsg('me', 'me', msg);
      const name = document.querySelector('#my-name').value;
      socket.send(`{"name":"${name}", "msg":"${msg}"}`);
      msgEl.value = '';
    }
  }



// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
  appendMsg('system', 'websocket', 'connected');
};


socket.onmessage = async (event) => {
    const text = await event.data.text();
    const chat = JSON.parse(text);
    appendMsg('friend', chat.name, chat.msg);
  };


  socket.onclose = (event) => {
    appendMsg('system', 'websocket', 'disconnected');
    document.querySelector('#name-controls').disabled = true;
    document.querySelector('#chat-controls').disabled = true;
  };


  const { WebSocketServer } = require('ws');
const express = require('express');
const app = express();

// Serve up our webSocket client HTML
app.use(express.static('./public'));

const port = process.argv.length > 2 ? process.argv[2] : 3000;
server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});


// Create a websocket object
const wss = new WebSocketServer({ noServer: true });

// Handle the protocol upgrade from HTTP to WebSocket
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});




// Keep track of all the connections so we can forward messages
let connections = [];

wss.on('connection', (ws) => {
  const connection = { id: connections.length + 1, alive: true, ws: ws };
  connections.push(connection);

    // Respond to pong messages by marking the connection alive
ws.on('pong', () => {
    connection.alive = true;
  });

  // Forward messages to everyone except the sender
  ws.on('message', function message(data) {
    connections.forEach((c) => {
      if (c.id !== connection.id) {
        c.ws.send(data);
      }
    });
  });

  // Remove the closed connection so we don't try to forward anymore
  ws.on('close', () => {
    connections.findIndex((o, i) => {
      if (o.id === connection.id) {
        connections.splice(i, 1);
        return true;
      }
    });
  });
});




setInterval(() => {
    connections.forEach((c) => {
      // Kill any connection that didn't respond to the ping last time
      if (!c.alive) {
        c.ws.terminate();
      } else {
        c.alive = false;
        c.ws.ping();
      }
    });
  }, 10000);







// const { WebSocketServer } = require('ws');
// const express = require('express');
// const app = express();

// // Serve up our webSocket client HTML
// app.use(express.static('./public'));

// const port = process.argv.length > 2 ? process.argv[2] : 3000;
// server = app.listen(port, () => {
//   console.log(`Listening on ${port}`);
// });

// // Create a websocket object
// const wss = new WebSocketServer({ noServer: true });

// // Handle the protocol upgrade from HTTP to WebSocket
// server.on('upgrade', (request, socket, head) => {
//   wss.handleUpgrade(request, socket, head, function done(ws) {
//     wss.emit('connection', ws, request);
//   });
// });

// // Keep track of all the connections so we can forward messages
// let connections = [];

// wss.on('connection', (ws) => {
//   const connection = { id: connections.length + 1, alive: true, ws: ws };
//   connections.push(connection);

//   // Forward messages to everyone except the sender
//   ws.on('message', function message(data) {
//     connections.forEach((c) => {
//       if (c.id !== connection.id) {
//         c.ws.send(data);
//       }
//     });
//   });

//   // Remove the closed connection so we don't try to forward anymore
//   ws.on('close', () => {
//     connections.findIndex((o, i) => {
//       if (o.id === connection.id) {
//         connections.splice(i, 1);
//         return true;
//       }
//     });
//   });

//   // Respond to pong messages by marking the connection alive
//   ws.on('pong', () => {
//     connection.alive = true;
//   });
// });

// // Keep active connections alive
// setInterval(() => {
//   connections.forEach((c) => {
//     // Kill any connection that didn't respond to the ping last time
//     if (!c.alive) {
//       c.ws.terminate();
//     } else {
//       c.alive = false;
//       c.ws.ping();
//     }
//   });
// }, 10000);











// const socket = new WebSocket('ws://localhost:9900');

// socket.onmessage = (event) => {
//   console.log('received: ', event.data);
// };

// socket.send('I am listening');







// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }
// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }





// var https = require('https')
// var fs = require('fs')

// const PORT = aquariapp.com

// fs.readFile('./index.html', function(error, html){
//     if (error) throw error;
//     https.createServer(function(request, response){
//         response.writeHeader(200, {"Content-Type": "text/html"});
//         response.write(html);
//         response.end();
// }).listen(PORT)
// });

// const navBtn = document.querySelector('.c-nav-btn')

// navBtn.addEventListener("click", function(){
//   navBtn.classList.toggle("is-active")
// })