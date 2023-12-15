import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './style.css';

export function Post_View() {
  //let i = 0;//modify when doing database
async function loadPost() {
  const response = await fetch("/api/getpost")
  const post = await response.json()

  // Modify the DOM to display the scores

  const tableBodyEl = document.querySelector('#post-table');

  if (post.length) {
    for (const [i, postStuff] of post.entries()) {
      const positionTdEl = document.createElement('td');
      const nameTdEl = document.createElement('td');
      const postTdEl = document.createElement('td');
      const dateTdEl = document.createElement('td');

      positionTdEl.textContent = postStuff.number;
      nameTdEl.textContent = postStuff.name;
      postTdEl.textContent = postStuff.post;
      dateTdEl.textContent = postStuff.date;

      const rowEl = document.createElement('tr');
      rowEl.appendChild(positionTdEl);
      rowEl.appendChild(nameTdEl);
      rowEl.appendChild(postTdEl);
      rowEl.appendChild(dateTdEl);

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to post something!</td></tr>';
  }
}

loadPost();






//POST PRODUCT LISTING
async function contentPost(){
  const postNum = document.querySelector("#post-number");
  localStorage.setItem("postNumber", postNum.value);
  const posterN = document.querySelector("#poster-name");
  localStorage.setItem("posterName", posterN.value);
  const postT = document.querySelector("#post-text");
  localStorage.setItem("postText", postT.value);
  const postD = document.querySelector("#post-date");
  localStorage.setItem("postDate", postD.value);
  

  let postStuff = {
    number: postNum.value,
    name: posterN.value,
    post: postT.value,
    date: postD.value
}
  //if(sale listing == valid) {
    
    //}
    //else{attempt failed, try again}
    //loadPost()

    try {
      const response = await fetch('/api/setpost', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(postStuff),
      });

      // Store what the service gave us as the high scores
      const posts = await response.json();
      localStorage.setItem('posts', JSON.stringify(posts));
    } catch {
      // If there was an error then just log it onto the console
      console.log('We could not post your content, try again!');
    }


    loadPost()
    //window.location.href = "post_view.html";
}


// try {
//   const response = await fetch('/api/setpost', {
//     method: 'POST',
//     headers: {'content-type': 'application/json'},
//     body: JSON.stringify(postStuff),
//   });

//   // Store what the service gave us as the high scores
//   const posts = await response.json();
//   localStorage.setItem('posts', JSON.stringify(posts));
// } catch {
//   // If there was an error then just log it onto the console
//   console.log('We could not post your content, try again!');
// }


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


  return (
    <main>
        <form id="post-fields">
            <label htmlFor="post-number">Post Number:</label><br/>
            <input type="text" id="post-number" name="post-number" placeholder="Post number"/><br/>
            <label htmlFor="poster-name">Name:</label><br/>
            <input type="text" id="poster-name" name="poster-name" placeholder="Enter name"/><br/>
            <label htmlFor="post-text">Post:</label><br/>
            <input type="text" id="post-text" name="post-text" placeholder="Enter post"/>
            <label htmlFor="post-date">Date:</label><br/>
            <input type="text" id="post-date" name="post-date" placeholder="Today's date"/>
          </form>
          <br/><br/>
          <NavLink to="contentPost()">Post</NavLink>
        <br/><br/><br/>
        <div style={{ overflowY: 'auto' }}>
        <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Post</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody id="post-table"></tbody>
          </table>
        </div>
    </main>
  );
}