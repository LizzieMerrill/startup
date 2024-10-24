//import React from 'react';

//import './style.css';

// export function Simulator() {
  //LOGIN

  function checkCompatibility() {
    // Get all the checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Array to store the selected fish
    let selectedFish = [];

    // Loop through the checkboxes and check if they are selected
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedFish.push(checkbox.id); // Use the checkbox id as the fish identifier
        }
    });

    // Ensure exactly two fish are selected
    if (selectedFish.length !== 2) {
        displayCompatibilityResult("Please select exactly two fish to check compatibility.");
        return;
    }

    // Get fishOne and fishTwo
    const fishOneName = selectedFish[0];
    const fishTwoName = selectedFish[1];

    // Call compatibility function with the selected fish
    compatibility(fishOneName, fishTwoName);
}

function compatibility(fishOneName, fishTwoName) {
    const fishOne = fishData[fishOneName];
    const fishTwo = fishData[fishTwoName];

    if (!fishOne || !fishTwo) {
        displayCompatibilityResult("One or both of the selected fish are not found.");
        return;
    }

    let resultMessage = "";

    if ((fishOne.requirements.bettaException === true) && (fishTwo.requirements.bettaException === true)) {
        resultMessage = `${fishOne.name} and ${fishTwo.name} are compatible and can live happily together in the same tank!`;
    } else if (fishOne.requirements.waterType !== fishTwo.requirements.waterType) {
        resultMessage = `${fishOne.name} are not compatible with ${fishTwo.name} because freshwater fish cannot live with saltwater fish!`;
    } else if (fishOne.requirements.mood !== fishTwo.requirements.mood) {
        resultMessage = `${fishOne.name} are not compatible with ${fishTwo.name} because aggressive fish will kill peaceful fish!`;
    } else if (fishOne.requirements.temperature !== fishTwo.requirements.temperature) {
        resultMessage = `${fishOne.name} are not compatible with ${fishTwo.name} because they need different water temperatures!`;
    } else {
        resultMessage = `${fishOne.name} and ${fishTwo.name} are compatible and can live happily together in the same tank!`;
    }

    // Display the result message on the document
    displayCompatibilityResult(resultMessage);
}

// Function to display compatibility result on the page
function displayCompatibilityResult(message) {
    const resultDiv = document.getElementById("compatibility-result");
    resultDiv.innerHTML = `<p>${message}</p>`;
}









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
      window.location.href = 'search_page.html';
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
  //     window.location.href = "search_page.html";
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
      window.location.href = 'search_page.html';
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
  // window.location.href = "search_page.html";
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



  // return (
  //   <main>
  //       <h1>COMING SOON!</h1>
  //   </main>
  // );
//}