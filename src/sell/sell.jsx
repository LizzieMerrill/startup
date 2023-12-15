import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './style.css';

export function Sell() {
  
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    // Update the state when the checkbox is clicked
    setIsChecked(!isChecked);
  };
  
  
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
        <div className="container">
            <h1>Sell</h1>
            <p>We want to know more about your product! Check all applicable boxes below to list what you are selling (this will make it easier for buyers to find your post!)</p>
        <br/>

        <br/>
        <div className="categories-container">
        <div className="product-category">
            <h2>Live Aquatics</h2>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Freshwater" name="Freshwater" value="Freshwater"/>
            <label htmlFor="Freshwater"> Freshwater</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Saltwater" name="Saltwater" value="Saltwater"/>
            <label htmlFor="Saltwater"> Saltwater</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Invertebrates" name="Invertebrates" value="Invertebrates"/>
            <label htmlFor="Invertebrates"> Invertebrates</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Other-Vertebrates" name="Other-Vertebrates" value="Other-Vertebrates"/>
            <label htmlFor="Other-Vertebrates"> Other Vertebrates</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Plants" name="Plants" value="Plants"/>
            <label htmlFor="Plants"> Plants</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Coral" name="Coral" value="Coral"/>
            <label htmlFor="Coral"> Coral</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Live-Rock" name="Live-Rock" value="Live-Rock"/>
            <label htmlFor="Live-Rock"> Live Rock</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Driftwood" name="Driftwood" value="Driftwood"/>
            <label htmlFor="Driftwood"> Driftwood</label><br/>
        </div>
        <div className="product-category">
            <h2>Tanks</h2>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Glass" name="Glass" value="Glass"/>
            <label htmlFor="Glass"> Glass</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Acrylic" name="Acrylic" value="Acrylic"/>
            <label htmlFor="Acrylic"> Acrylic</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Long" name="Long" value="Long"/>
            <label htmlFor="Long"> Long</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="High" name="High" value="High"/>
            <label htmlFor="High"> High</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Breeder" name="Breeder" value="Breeder"/>
            <label htmlFor="Breeder"> Breeder</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Hexagon" name="Hexagon" value="Hexagon"/>
            <label htmlFor="Hexagon"> Hexagon</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Other-Size" name="Other-Size" value="Other-Size"/>
            <label htmlFor="Other-Size"> Other Size</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="1-Gallon" name="1-Gallon" value="1-Gallon"/>
            <label htmlFor="1-Gallon"> 1 Gallon</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="2.5-Gallons" name="2.5-Gallons" value="2.5-Gallons"/>
            <label htmlFor="2.5-Gallons"> 2.5 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="3-Gallons" name="3-Gallons" value="3-Gallons"/>
            <label htmlFor="3-Gallons"> 3 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="5-Gallons" name="5-Gallons" value="5-Gallons"/>
            <label htmlFor="5-Gallons"> 5 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="5.5-Gallons" name="5.5-Gallons" value="5.5-Gallons"/>
            <label htmlFor="5.5-Gallons"> 5.5 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="10-Gallons" name="10-Gallons" value="10-Gallons"/>
            <label htmlFor="10-Gallons"> 10 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="14-Gallons" name="14-Gallons" value="14-Gallons"/>
            <label htmlFor="14-Gallons"> 14 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="15-Gallons" name="15-Gallons" value="15-Gallons"/>
            <label htmlFor="15-Gallons"> 15 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="20-Gallons" name="20-Gallons" value="20-Gallons"/>
            <label htmlFor="20-Gallons"> 20 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="25-Gallons" name="25-Gallons" value="25-Gallons"/>
            <label htmlFor="25-Gallons"> 25 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="29-Gallons" name="29-Gallons" value="29-Gallons"/>
            <label htmlFor="29-Gallons"> 29 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="30-Gallons" name="30-Gallons" value="30-Gallons"/>
            <label htmlFor="30-Gallons"> 30 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="35-Gallons" name="35-Gallons" value="35-Gallons"/>
            <label htmlFor="35-Gallons"> 35 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="37-Gallons" name="37-Gallons" value="37-Gallons"/>
            <label htmlFor="37-Gallons"> 37 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="40-Gallons" name="40-Gallons" value="40-Gallons"/>
            <label htmlFor="40-Gallons"> 40 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="45-Gallons" name="45-Gallons" value="45-Gallons"/>
            <label htmlFor="45-Gallons"> 45 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="50-Gallons" name="50-Gallons" value="50-Gallons"/>
            <label htmlFor="50-Gallons"> 50 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="55-Gallons" name="55-Gallons" value="55-Gallons"/>
            <label htmlFor="55-Gallons"> 55 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="60-Gallons" name="60-Gallons" value="60-Gallons"/>
            <label htmlFor="60-Gallons"> 60 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="65-Gallons" name="65-Gallons" value="65-Gallons"/>
            <label htmlFor="65-Gallons"> 65 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="75-Gallons" name="75-Gallons" value="75-Gallons"/>
            <label htmlFor="75-Gallons"> 75 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="90-Gallons" name="90-Gallons" value="90-Gallons"/>
            <label htmlFor="90-Gallons"> 90 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="110-Gallons" name="110-Gallons" value="110-Gallons"/>
            <label htmlFor="110-Gallons"> 110 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="120-Gallons" name="120-Gallons" value="120-Gallons"/>
            <label htmlFor="120-Gallons"> 120 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="125-Gallons" name="125-Gallons" value="125-Gallons"/>
            <label htmlFor="125-Gallons"> 125 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="150-Gallons" name="150-Gallons" value="150-Gallons"/>
            <label htmlFor="150-Gallons"> 150 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="180-Gallons" name="180-Gallons" value="180-Gallons"/>
            <label htmlFor="180-Gallons"> 180 Gallons</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="225-Gallons" name="225-Gallons" value="225-Gallons"/>
            <label htmlFor="225-Gallons"> 225 Gallons</label><br/>
            <br/>
        </div>
        <div className="product-category">
            <h2>Equipment</h2>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Aquarium-Kits" name="Aquarium-Kits" value="Aquarium-Kits"/>
            <label htmlFor="Aquarium-Kits"> Aquarium Kits</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Stands" name="Stands" value="Stands"/>
            <label htmlFor="Stands"> Stands</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Food" name="Food" value="Food"/>
            <label htmlFor="Food"> Food</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Filters" name="Filters" value="Filters"/>
            <label htmlFor="Filters"> Filters</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Filter-Refills" name="Filter-Refills" value="Filter-Refills"/>
            <label htmlFor="Filter-Refills"> Filter Refills</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Heaters" name="Heaters" value="Heaters"/>
            <label htmlFor="Heaters"> Heaters</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Lids" name="Lids" value="Lids"/>
            <label htmlFor="Lids"> Lids</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Lights" name="Lights" value="Lights"/>
            <label htmlFor="Lights"> Lights</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Thermometers" name="Thermometers" value="Thermometers"/>
            <label htmlFor="Thermometers"> Thermometers</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Air-Pumps" name="Air-Pumps" value="Air-Pumps"/>
            <label htmlFor="Air-Pumps"> Air Pumps</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Air-Stones" name="Air-Stones" value="Air-Stones"/>
            <label htmlFor="Air-Stones"> Air Stones</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Tubing" name="Tubing" value="Tubing"/>
            <label htmlFor="Tubing"> Tubing</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Dividers" name="Dividers" value="Dividers"/>
            <label htmlFor="Dividers"> Dividers</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Gravel-Vacuums" name="Gravel-Vacuums" value="Gravel-Vacuums"/>
            <label htmlFor="Gravel-Vacuums"> Gravel Vacuums</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Buckets" name="Buckets" value="Buckets"/>
            <label htmlFor="Buckets"> Buckets</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Nets" name="Nets" value="Nets"/>
            <label htmlFor="Nets"> Nets</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Spare-Parts" name="Spare-Parts" value="Spare-Parts"/>
            <label htmlFor="Spare-Parts"> Spare Parts</label><br/>
            <br/>
        </div>
        <div className="product-category">
            <h2>Aquascaping</h2>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Decor" name="Decor" value="Decor"/>
            <label htmlFor="Decor"> Decor</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Rock-Substrate" name="Rock-Substrate" value="Rock-Substrate"/>
            <label htmlFor="Rock-Substrate"> Rock Substrate</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Sand-Substrate" name="Sand-Substrate" value="Sand-Substrate"/>
            <label htmlFor="Sand-Substrate"> Sand Substrate</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Dirted-Substrate" name="Dirted-Substrate" value="Dirted-Substrate"/>
            <label htmlFor="Dirted-Substrate"> Dirted Substrate</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Fake-Substrate" name="Fake-Substrate" value="Fake-Substrate"/>
            <label htmlFor="Fake-Substrate"> Fake Substrate</label><br/>
            <br/>
        </div>
        <div className="product-category">
            <h2>Chemicals</h2>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Water-Testing" name="Water-Testing" value="Water-Testing"/>
            <label htmlFor="Water-Testing"> Water Testing</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Sealant" name="Sealant" value="Sealant"/>
            <label htmlFor="Sealant"> Sealant</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Water-Conditioner" name="Water-Conditioner" value="Water-Conditioner"/>
            <label htmlFor="Water-Conditioner"> Water Conditioner</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Medicine" name="Medicine" value="Medicine"/>
            <label htmlFor="Medicine"> Medicine</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Plant-Nutrients" name="Plant-Nutrients" value="Plant-Nutrients"/>
            <label htmlFor="Plant-Nutrients"> Plant Nutrients</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Other-Chemicals" name="Other-Chemicals" value="Other-Chemicals"/>
            <label htmlFor="Other-Chemicals"> Other Chemicals</label><br/>
            <br/>
        </div>
        <div className="product-category">
            <h2>Brand</h2>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Seachem" name="Seachem" value="Seachem"/>
            <label htmlFor="Seachem"> Seachem</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Fluval" name="Fluval" value="Fluval"/>
            <label htmlFor="Fluval"> Fluval</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="API" name="API" value="API"/>
            <label htmlFor="API"> API</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Aqueon" name="Aqueon" value="Aqueon"/>
            <label htmlFor="Aqueon"> Aqueon</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Top-Fin" name="Top-Fin" value="Top-Fin"/>
            <label htmlFor="Top-Fin"> Top Fin</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Imagitarium" name="Imagitarium" value="Imagitarium"/>
            <label htmlFor="Imagitarium"> Imagitarium</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Marineland" name="Marineland" value="Marineland"/>
            <label htmlFor="Marineland"> Marineland</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="AquaClear" name="AquaClear" value="AquaClear"/>
            <label htmlFor="AquaClear"> AquaClear</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Omega-One" name="Omega-One" value="Omega-One"/>
            <label htmlFor="Omega-One"> Omega One</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="San-Francisco-Bay-Brand" name="San-Francisco-Bay-Brand" value="San-Francisco-Bay-Brand"/>
            <label htmlFor="San-Francisco-Bay-Brand"> San Francisco Bay Brand</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Tetra" name="Tetra" value="Tetra"/>
            <label htmlFor="Tetra"> Tetra</label><br/>
            <br/>
        </div>
        <div className="product-category">
            <h2>Live Species</h2>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Joe" name="Joe" value="Joe"/>
            <label htmlFor="Joe"> Joe</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Mama" name="Mama" value="Mama"/>
            <label htmlFor="Mama"> Mama</label><br/>
            <br/>
        </div>
        <div className="product-category">
            <h2>Condition</h2>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="New" name="New" value="New"/>
            <label htmlFor="New"> New</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Used-Like-New" name="Used-Like-New" value="Used-Like-New"/>
            <label htmlFor="Used-Like-New"> Used - Like New</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Used-Very-Good" name="Used-Very-Good" value="Used-Very-Good"/>
            <label htmlFor="Used-Very-Good"> Used - Very Good</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Used-Good" name="Used-Good" value="Used-Good"/>
            <label htmlFor="Used-Good"> Used - Good</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Used-Fair" name="Used-Fair" value="Used-Fair"/>
            <label htmlFor="Used-Fair"> Used - Fair</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Used-Bad" name="Used-Bad" value="Used-Bad"/>
            <label htmlFor="Used-Bad"> Used - Bad</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Used-Broken" name="Used-Broken" value="Used-Broken"/>
            <label htmlFor="Used-Broken"> Used - Broken</label><br/>
            <br/>
            <input type="checkbox" autoComplete='off' checked={isChecked} onChange={handleCheckboxChange} id="Refurbished" name="Refurbished" value="Refurbished"/>
            <label htmlFor="Refurbished"> Refurbished</label><br/>
            <br/>
        </div>
    </div>

    <br/><br/>


            <label htmlFor="sale-title"><b>Title</b></label>
            <input id="sale-title" type="text" placeholder="Enter Listing Title" name="sale-title" required/>
        
            <label htmlFor="sale-description"><b>Description</b></label>
            <input id="sale-description" type="text" placeholder="Enter Listing Description..." name="sale-description" required/>
    
            <label htmlFor="sale-materials"><b>Material(s) (Optional)</b></label>
            <input id="sale-materials" type="text" placeholder="Enter Product Materials (e.g. if your stand is made of metal, put 'metal')" name="sale-materials"/>
        
            <label htmlFor="sale-colors"><b>Color(s) (Optional)</b></label>
            <input id="sale-colors" type="text" placeholder="Enter Product Colors" name="sale-colors"/>
        
            <label htmlFor="sale-dimensions"><b>Dimensions (Optional)</b></label>
            <input id="sale-dimensions" type="text" placeholder="Enter Product Dimensions" name="sale-dimensions"/>
        
            <p>By listing and selling this product you agree to our </p><NavLink to="terms_and_privacy" style={{color: `dodgerblue` }}>Terms and Conditions.</NavLink>
        
            <div className="clearfix">
            <NavLink to="home_page">Cancel</NavLink>
              <NavLink to="sell()">Post Listing</NavLink>
            </div>
          </div>
    </main>
  );
}