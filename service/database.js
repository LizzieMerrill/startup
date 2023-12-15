const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');







//async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url);
  const db = client.db('user_info');
  const collectionUsernames = db.collection('usernames');
  const collectionAquariums = db.collection('aquariums');
  const collectionPosts = db.collection('posts');
  const collectionListings = db.collection('listings');

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });





// //LOGIN

// function login() {
//   const userN = document.querySelector("#login-username");
//   localStorage.setItem("userName", userN.value);
//   const userP = document.querySelector("#login-password");
//   localStorage.setItem("userPass", userP.value);
//   //if(insert authentication logic == valid) {
//     if(db.usernames.find({userName:{$exists:true}})){
//       window.location.href = "home_page.html";
//     }
//   //}
//   //else{attempt failed, try again}
//   else{
//     document.querySelector("log-in-text").textContent = "Login attempt failed, try again."
//   }
// }

// //SIGN UP

// function signUp() {
//   //if(check if user info is not already taken){
//     const newUserE = document.querySelector("#signup-email");
//   localStorage.setItem("newUserEmail", newUserE.value);
//   const newUserN = document.querySelector("#signup-username");
//   localStorage.setItem("newUserName", newUserN.value);
//   if(document.querySelector("#signup-password").textContent == document.querySelector("#signup-password-confirmation").textContent){
//   const newUserP = document.querySelector("#signup-password");
//   localStorage.setItem("newUserPass", newUserP.value);
//   }
//   // else{
//   //   //return false and tell user to try again due to password mismatch (USE WEBSOCKET TO CHECK IN REALTIME WHETHER PASSWORDS MATCH??)
//   // }
//   // //if(insert authentication logic == valid) {
//   // window.location.href = "home_page.html";
//   //}
//   //else{attempt failed, try again}
// //}
// }




// //POST PRODUCT LISTING
// function sell(){
//   const saleT = document.querySelector("#sale-title");
//   localStorage.setItem("saleTitle", saleT.value);
//   const saleDesc = document.querySelector("#sale-description");
//   localStorage.setItem("saleDescription", saleDesc.value);
//   const saleM = document.querySelector("#sale-materials");
//   localStorage.setItem("saleMaterials", saleM.value);
//   const saleC = document.querySelector("#sale-colors");
//   localStorage.setItem("saleColors", saleC.value);
//   const saleDim = document.querySelector("#sale-dimensions");
//   localStorage.setItem("saleDimensions", saleDim.value);

//   //if(sale listing == valid) {
//     window.location.href = "product_page.html";
//     //}
//     //else{attempt failed, try again}
// }


// //ADD NEW TANK TO COLLECTION
// function addToCollection(){
//   const collectionTankS = document.querySelector("#collection-tank-size-input");
//   localStorage.setItem("collectionTankSize", collectionTankS.value);
//   const collectionTankU = document.querySelector("#collection-tank-units-input");
//   localStorage.setItem("collectionTankUnits", collectionTankU.value);
//   const collectionTankDim = document.querySelector("#collection-tank-dimensions-input");
//   localStorage.setItem("collectionTankDimensions", collectionTankDim.value);
//   const collectionTankNF = document.querySelector("#collection-tank-num-fish-input");
//   localStorage.setItem("collectionTankNumFish", collectionTankNF.value);
//   const collectionTankDesc = document.querySelector("#collection-tank-description-input");
//   localStorage.setItem("collectionTankDescription", collectionTankDesc.value);

//   //if(sale listing == valid) {



//     document.alert("Tell the community about your new tank! :)");
//     //add tank to collection through database, and display collection list
//     //}
//     //else{attempt failed, try again}
// }






//let sum;


  // Insert a document
  // if(db.usernames.find({newUserName:{$exists:false}})){//another param?
  //   if(sum == null){
  //     sum = 1;
  //   }
  // const person = {
  //   email: document.querySelector("#signup-email"),
  //   username: document.querySelector("#signup-username"),
  //   password: document.querySelector("#signup-password"),
  //   token: sum,
  // };
  // //sum = sum + 1;
  // await collectionUsernames.insertOne(person);
// }
// else{
//   //alert user passwords did not match
//   //document.querySelector("sign-up-text").textContent = "Sign up attempt failed, try again."
// }

  // // Query the documents
  // const query = { username: document.querySelector("#signup-username"), beds: { $lt: 2 } };
  // const options = {
  //   sort: { score: -1 },
  //   limit: 10,
  // };

  // const cursor = collectionUsernames.find(query, options);
  // const rentals = await cursor.toArray();
  // rentals.forEach((i) => console.log(i));


  // function getUsers() {
  //   const query = { score: { $gt: 0, $lt: 900 } };
  //   const options = {
  //     sort: { score: -1 },
  //     limit: 10,
  //   };
  //   const cursor = scoreCollection.find(query, options);
  //   return cursor.toArray();
  // }







// }

// main().catch(console.error);


//mongodb+srv://cs260:<password>@cluster0.qnizji0.mongodb.net/?retryWrites=true&w=majority




// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://cs260:<password>@cluster0.qnizji0.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



/*



const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url);
  const db = client.db('rental');
  const collection = db.collection('house');

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  // Insert a document
  const house = {
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  };
  await collection.insertOne(house);

  // Query the documents
  const query = { property_type: 'Condo', beds: { $lt: 2 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = collection.find(query, options);
  const rentals = await cursor.toArray();
  rentals.forEach((i) => console.log(i));
}

main().catch(console.error);


*/



function updatePosts(newPost) {
  collectionPosts.insertOne(newPost);
  return newPost;
}

function getPosts(){
    const cursor = collectionPosts.find();
    return cursor.toArray();
}

function getUser(userName) {
  return collectionUsernames.findOne({ username: userName });
}

function getUserByToken(token) {
  return collectionUsernames.findOne({ token: token });
}

async function createUser(email, username, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const person = {
    email: email,
    username: username,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collectionUsernames.insertOne(person);

  return user;
}

module.exports = { updatePosts, getPosts, getUser, getUserByToken, createUser };
// }
// main().catch(console.error);