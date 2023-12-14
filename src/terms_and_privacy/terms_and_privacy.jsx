import React from 'react';

import './style.css';

export function Terms_And_Privacy() {
  //LOGIN



const url = "https://api.chucknorris.io/jokes/random";
fetch(url)
  .then((x) => x.json())
  .then((response) => {
    document.querySelector("pre").textContent = JSON.stringify(
      response.value
    );
  });




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
  if(localStorage.getItem('userName') != null){//log out if its a previously existing user
    localStorage.removeItem('userName');
  }
  if(localStorage.getItem('newUserName') != null){//if it's their first time signing in because they're a brand new user, doing this cuz variable names are different between login and signup functions
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
    <div>
        <h1>Terms and Conditions of Use</h1>
        <h2>Effective Date: 10/15/2023</h2>
    </div>
    <div>
    <ol>
        <li>
            <h4>Acceptance of Terms</h4>
            <p>By using the Aquari website ("Website") and its services, 
                you agree to be bound by these Terms and Conditions. If you 
                do not agree to these terms, please do not use the Website or 
                its services.</p>
        </li>
        <li>
            <h4>User Eligibility</h4>
            <p>2.1. You must be at least 18 years old or have the legal capacity to enter into a contract to use Aquari. By using our services, you confirm that you meet these requirements.
                <br/>
                2.2. You are responsible for providing accurate and current information when using the Website and its services.</p>
        </li>
        <li>
            <h4>User Accounts</h4>
            <p>3.1. You are responsible for maintaining the confidentiality of your account information and password.
                <br/>
                3.2. You are responsible for all activities that occur under your account.
                <br/>
                3.3. You agree to notify us immediately of any unauthorized use of your account.</p>
        </li>
        <li>
            <h4>User-Generated Content</h4>
            <p>4.1. Users may post content, including images, descriptions, and other information related to aquarium fish and equipment. You are solely responsible for the content you post.
                <br/>
                4.2. Aquari reserves the right to remove any content that violates these Terms and Conditions or is deemed inappropriate.</p>
        </li>
        <li>
            <h4>Buying and Selling</h4>
            <p>5.1. Aquari provides a platform for users to buy and sell aquarium fish and equipment. Users are solely responsible for their transactions.
                <br/>
                5.2. Aquari does not guarantee the accuracy of listings or the quality of products.</p>
        </li>
        <li>
            <h4>Information Accuracy</h4>
            <p>6.1. Information provided on Aquari, including data obtained from third-party sources such as FishBase, is for informational purposes only. Aquari makes no warranties or representations about the accuracy or completeness of the information.</p>
        </li>
        <li>
            <h4>Liability Disclaimer</h4>
            <p>7.1. Aquari and its associates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use our services, including any transactions or content posted on the Website.</p>
        </li>
        <li>
            <h4>User Privacy</h4>
            <p>8.1. Your use of Aquari is also governed by our Privacy Policy [Link to Privacy Policy], which outlines how we collect, use, and protect your personal information.</p>
        </li>
        <li>
            <h4>Changes to Terms and Conditions</h4>
            <p>9.1. Aquari reserves the right to modify these Terms and Conditions at any time. It is your responsibility to review these terms periodically.</p>
        </li>
        <li>
            <h4>Contact Information</h4>
            <p>If you have any questions or concerns about these Terms and Conditions, please contact us at aquari.customerservice@gmail.com.</p>
        </li>
    </ol>
</div>
<br/><br/><br/>
<div>
    <h1>Privacy Policy</h1>
    <h2>Effective Date: 10/15/2023</h2>
</div>
<div>
    <ol>
        <li>
            <h4>Information Collection</h4>
            <p>1.1. Aquari collects and stores user information, including but not limited to:
                <br/><ul>
                <li>Personal identification information (e.g., name, email, address)</li>
                <li>User-generated content (e.g., fish tank collections, posts, comments)</li>
                <li>Transactional information (e.g., purchase history)</li>
                <li>Usage data and analytics</li>
            </ul><br/>
                1.2. Aquari may obtain information from third-party sources, such as FishBase, to provide accurate and up-to-date information about fish species.</p>
        </li>
        <li>
            <h4>Use of Information</h4>
            <p>
                2.1. Aquari uses collected information for the following purposes:
                <br/>
                <ul>
                    <li>To provide and improve our services</li>
                    <li>To personalize user experiences</li>
                    <li>To facilitate transactions and communication between users</li>
                    <li>To send important notifications and updates</li>
                    <li>To analyze and enhance the Website's performance and functionality</li>
                </ul>
            </p>
        </li>
        <li>
            <h4>Information Sharing</h4>
            <p>3.1. Aquari may share user information with third parties, including sellers and partners, as necessary to provide our services and improve user experiences.</p>
        </li>
        <li>
            <h4>Security</h4>
            <p>4.1. Aquari employs industry-standard security measures to protect user information. However, no online platform can guarantee absolute security.</p>
        </li>
        <li>
            <h4>User Choices</h4>
            <p>5.1. Users can update their information, opt-out of marketing communications, and delete their accounts as specified in the Website's settings.</p>
        </li>
        <li>
            <h4>Cookies and Tracking</h4>
            <p>6.1. Aquari may use cookies and similar tracking technologies to enhance user experiences and collect data for analytics purposes.</p>
        </li>
        <li>
            <h4>Third-Party Links</h4>
            <p>7.1. Aquari may contain links to third-party websites. Please be aware that Aquari is not responsible for the privacy practices of these external websites.</p>
        </li>
        <li>
            <h4>Policy Changes</h4>
            <p>8.1. Aquari reserves the right to modify this Privacy Policy at any time. Users will be notified of significant changes.</p>
        </li>
        <li>
            <h4>Contact Information</h4>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at aquari.customerservice@gmail.com.</p>
        </li>
    </ol>
</div>



  //   
  //   <h1>Terms of Use</h1>
  //   <ol>
  //       <li><h4>Ownership of Site; Agreement to Terms of Use</h4>
  //           <p>These Terms and Conditions of Use (the "Terms of Use") apply to the 
  //               Aquari web site located at www.aquariapp.com, and all associated 
  //               sites linked to www.aquariapp.com by Aquari, its subsidiaries and 
  //               affiliates, including Aquari sites around the world (collectively, 
  //               the "Site"). The Site is the property of Aquari LLC ("Aquari") and 
  //               its licensors. <mark>BY USING THE SITE, YOU AGREE TO THESE TERMS OF USE; 
  //               IF YOU DO NOT AGREE, DO NOT USE THE SITE.</mark>
  //               <br/><br/>
  //               Aquari reserves the right, at its sole discretion, to change, modify, 
  //               add or remove portions of these Terms of Use, at any time. It is your 
  //               responsibility to check these Terms of Use periodically for changes. 
  //               Your continued use of the Site following the posting of changes will 
  //               mean that you accept and agree to the changes. As long as you comply 
  //               with these Terms of Use, Aquari grants you a personal, non-exclusive, 
  //               non-transferable limited privilege to enter and use the Site.
  //           </p>
  //       </li>
  //       <li>
  //           <h4>Copyrights; Restrictions on Use</h4>
  //           <p><mark>The content on the Services (the "Content"), including without 
  //               limitation, video, text, photos, and graphics, is protected under 
  //               United States and international copyright laws, is subject to other 
  //               intellectual property and proprietary rights and laws, and is owned 
  //               by us or our licensors.</mark> Other than with respect to your own User 
  //               Submissions: (a) the Content may not be copied, modified, reproduced, 
  //               republished, posted, transmitted, sold, offered for sale, or redistributed 
  //               in any way without our prior written permission and that of our applicable 
  //               licensors; and (b) you must abide by all copyright notices, information, 
  //               or restrictions contained in or attached to any Content. We give you a 
  //               personal, revocable, non-assignable, non-sublicensable and non-exclusive 
  //               right to access and use the Services in the manner permitted by these Terms. 
  //               You acknowledge that you have no right to have access to all or any part 
  //               of the Services in source code form.
  //           </p>
  //       </li>
  //       <li>
  //           <h4>Copyright Infringement and Trademark Rights</h4>
  //           <p>We respect the intellectual property rights of others. Accordingly, we 
  //               have a policy of removing User Submissions that violate copyright law, 
  //               suspending access to the Services (or any portion thereof) to any user 
  //               who uses the Services in violation of copyright law, and/or terminating 
  //               in appropriate circumstances the account of any user who uses the 
  //               Services in violation of copyright law. <mark>Pursuant to Title 17 of 
  //               the United States Code, Section 512, the Digital Millenium Copyright 
  //               Act of 1998 ("DMCA"), we have implemented procedures for receiving written 
  //               notification of claimed copyright infringement and for processing such 
  //               claims in accordance with such law.</mark> If you believe a user of the 
  //               Services is infringing your copyright, please provide written notice to 
  //               our agent listed below for notice of claims of copyright infringement.
  //           </p>
  //       </li>
  //       <li>
  //           <h4>Your Content and Conduct</h4>
  //       </li>

  //   </ol>
  //  <h1>Privacy Policy</h1>
  //   <ol>

  //   </ol>
    <br/><br/><br/><br/><br/><br/><br/><br/>
</main>
  );
}