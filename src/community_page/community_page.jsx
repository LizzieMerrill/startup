import React from 'react';

import './style.css';

export function Community_Page() {
  //LOGIN


async function login() {
  const userN = document.querySelector("#login-username");
  localStorage.setItem("userName", userN.value);
  const userP = document.querySelector("#login-password");
  localStorage.setItem("userPass", userP.value);

  try {
    const response = await fetch('/api/auth/login', {//??????????????????????
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(userName),
    });

    // Store what the service gave us as the user
    const users = await response.json();
    localStorage.setItem('users', JSON.stringify(users));

    if (response.ok) {
      window.location.href = 'home_page.html';
    } else {
      const body = await response.json();
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  } catch {
    // If there was an error then just log it onto the console
    console.log('Login attempt failed, try again!');
  }


  // //if(insert authentication logic == valid) {
  //   if(send){
  //     window.location.href = "home_page.html";
  //   }
  // //}
  // //else{attempt failed, try again}
  // else{
  //   document.querySelector("log-in-text").textContent = "Login attempt failed, try again."
  // }
}




//LOG OUT
function logout() {
  if(localStorage.getItem('userName')){//log out if its a previously existing user
    localStorage.removeItem('userName');
  }
  if(localStorage.getItem('newUserName')){//if it's their first time signing in because they're a brand new user, doing this cuz variable names are different between login and signup functions
    localStorage.removeItem('newUserName');
  }
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = 'index.html'));
}





//SIGN UP

async function signUp() {
  //if(check if user info is not already taken){
    const newUserE = document.querySelector("#signup-email");
  localStorage.setItem("newUserEmail", newUserE.value);
  const newUserN = document.querySelector("#signup-username");
  localStorage.setItem("newUserName", newUserN.value);
  if(document.querySelector("#signup-password").textContent == document.querySelector("#signup-password-confirmation").textContent){
  const newUserP = document.querySelector("#signup-password");
  localStorage.setItem("newUserPass", newUserP.value);


  try {
    const response = await fetch('/api/auth/create', {//?????????????????
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newUserE, newUserN, newUserP),
    });

    // Store what the service gave us as the high scores
    const users = await response.json();
    localStorage.setItem('users', JSON.stringify(users));

    if (response.ok) {
      window.location.href = 'home_page.html';
    } else {
      const body = await response.json();
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  } catch {
    // If there was an error then just log it onto the console
    console.log('Sign up attempt failed, try again!');
  }


  return 0;
  }
  return 1;
  // else{
  //   //return false and tell user to try again due to password mismatch (USE WEBSOCKET TO CHECK IN REALTIME WHETHER PASSWORDS MATCH??)
  // }
  // //if(insert authentication logic == valid) {
  // window.location.href = "home_page.html";
  //}
  //else{attempt failed, try again}
//}
}




//POST PRODUCT LISTING
function sell(){
  const saleT = document.querySelector("#sale-title");
  localStorage.setItem("saleTitle", saleT.value);
  const saleDesc = document.querySelector("#sale-description");
  localStorage.setItem("saleDescription", saleDesc.value);
  const saleM = document.querySelector("#sale-materials");
  localStorage.setItem("saleMaterials", saleM.value);
  const saleC = document.querySelector("#sale-colors");
  localStorage.setItem("saleColors", saleC.value);
  const saleDim = document.querySelector("#sale-dimensions");
  localStorage.setItem("saleDimensions", saleDim.value);

  //if(sale listing == valid) {
    window.location.href = "product_page.html";
    //}
    //else{attempt failed, try again}
}


//ADD NEW TANK TO COLLECTION
function addToCollection(){
  const collectionTankS = document.querySelector("#collection-tank-size-input");
  localStorage.setItem("collectionTankSize", collectionTankS.value);
  const collectionTankU = document.querySelector("#collection-tank-units-input");
  localStorage.setItem("collectionTankUnits", collectionTankU.value);
  const collectionTankDim = document.querySelector("#collection-tank-dimensions-input");
  localStorage.setItem("collectionTankDimensions", collectionTankDim.value);
  const collectionTankNF = document.querySelector("#collection-tank-num-fish-input");
  localStorage.setItem("collectionTankNumFish", collectionTankNF.value);
  const collectionTankDesc = document.querySelector("#collection-tank-description-input");
  localStorage.setItem("collectionTankDescription", collectionTankDesc.value);

  //if(sale listing == valid) {



    document.alert("Tell the community about your new tank! :)");
    //add tank to collection through database, and display collection list
    //}
    //else{attempt failed, try again}
}














// CHAT

// const chatControls = document.querySelector('#chat-controls');
// const myName = document.querySelector('#my-name');
// myName.addEventListener('keyup', (e) => {
//   chatControls.disabled = myName.value === '';
// });

// function appendMsg(cls, from, msg) {
//     const chatText = document.querySelector('#chat-text');
//     chatText.innerHTML = `<div><span class="${cls}">${from}</span>: ${msg}</div>` + chatText.innerHTML;
//   }

//   const input = document.querySelector('#new-msg');
//   input.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//       sendMessage();
//     }
//   });

// CHAT

const Chat = () => {
  const [chatControlsDisabled, setChatControlsDisabled] = useState(true);
  const [myName, setMyName] = useState('');
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');

  const handleMyNameChange = (e) => {
    setMyName(e.target.value);
    setChatControlsDisabled(e.target.value === '');
  };

  const appendMsg = (cls, from, msg) => {
    setMessages((prevMessages) => [
      {
        id: Date.now(),
        cls,
        from,
        msg,
      },
      ...prevMessages,
    ]);
  };

  const handleNewMsgChange = (e) => {
    setNewMsg(e.target.value);
  };

  const handleNewMsgKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };
}

  // const sendMessage = () => {
  //   // Implement your sendMessage logic here
  //   // For example, you can append the message to the messages state
  //   appendMsg('user', myName, newMsg);
  //   // Clear the input field after sending the message
  //   setNewMsg('');
  // };

//   return (
//     <div>
//       <input
//         type="text"
//         id="my-name"
//         value={myName}
//         onChange={handleMyNameChange}
//         placeholder="Your Name"
//       />
//       <button id="chat-controls" disabled={chatControlsDisabled}>
//         Send
//       </button>
//       <div id="chat-text">
//         {messages.map((message) => (
//           <div key={message.id}>
//             <span className={message.cls}>{message.from}</span>: {message.msg}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         id="new-msg"
//         value={newMsg}
//         onChange={handleNewMsgChange}
//         onKeyDown={handleNewMsgKeyDown}
//         placeholder="Type your message and press Enter"
//       />
//     </div>
//   );
// };

// export default Chat;











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
const { Db } = require('mongodb');
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
  return (
    <main>
        <div className="name">
            <fieldset id="name-controls">
              <legend>My Name</legend>
              <input id="my-name" type="text" />
            </fieldset>
          </div>
      
          <fieldset id="chat-controls" disabled>
            <legend>Chat</legend>
            <input id="new-msg" type="text" />
            <button onclick="sendMessage()">Send</button>
          </fieldset>
          <div id="chat-text"></div>
    </main>
  );
}