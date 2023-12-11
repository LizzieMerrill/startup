const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const { WebSocketServer } = require('ws');
const DB = require('./database.js');

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetPosts
apiRouter.get('/getpost', (_req, res) => {
  res.send(post);
});

// SubmitPost
apiRouter.post('/setpost', (req, res) => {
  post = updatePosts(req.body);
  res.send(true);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


let postArr = [];
function updatePosts(newPost) {
  postArr.push(newPost);
  
  //1

  return postArr;
}








//1:


  // let found = false;
  // for (const [i, prevPost] of posts.entries()) {
  //   if (newPost.post > prevPost.post) {
  //     posts.splice(i, 0, newPost);
  //     found = true;
  //     break;
  //   }
  // }

  // if (!found) {
  //   posts.push(newPost);
  // }

  // if (posts.length > 10) {
  //   posts.length = 10;
  // }




  //2:

// const express = require('express');
// const path = require('path');
// const app = express();
// const fs = require('fs');
// const { WebSocketServer } = require('ws');
// const DB = require('./database.js');

// app.use(express.json());

// app.put('/api/login', function (req, res) {
//   const email = req.body.email;

//   DB.UserCol.findOne({ email: email }, async (error, user) => {
//     if (!user) {
//       user = await new DB.UserCol({ email: email, votes: [] }).save();
//     }
//     // Set a cookie representing the logged in user.
//     // We don't actually use this since we use localStorage instead,
//     // but it does demonstrate safe cookies.
//     res.cookie('voter', email, {
//       httpOnly: true,
//       sameSite: 'Strict',
//       secure: true,
//     });
//     res.send(user);
//   });
// });

// app.get('/api/candidate', (req, res) => {
//   DB.CandidateCol.find(function (error, candidate) {
//     res.send({ candidate: candidate });
//   });
// });

// // Replace the candidates and reset the users
// // Format: {"candidates":[{"name": "Meg","url": "https://game.com","votes": 0,"id": "game"}]}
// // curl -X PUT localhost:4000/api/candidates -H "Content-Type:application/json" --data '@finalists.json'
// app.put('/api/candidates', async (req, res) => {
//   if (req.body.candidate.length) {
//     await DB.CandidateCol.collection.drop();
//     await DB.UserCol.collection.drop();
//     const result = await DB.CandidateCol.insertMany(req.body.candidate);

//     res.send(result);
//   }
// });

// // Get the API version.
// app.get('/api/version', (req, res) => {
//   fs.readFile(
//     path.join(path.dirname(__filename), 'version.txt'),
//     (err, data) => {
//       const version = err ? 'unknown' : String.fromCharCode(...data);
//       res.header('Access-Control-Allow-Origin', '*');
//       res.send({ version: version });
//     }
//   );
// });

// // Serve up our application UI
// app.use(express.static(path.join(__dirname, './public')));

// // If no API, or exact file, was found then return the Vue app
// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

// async function updateCandidates(buffer) {
//   // Example msg:    { user: {user}, id: candidateId, addVote: addVote }
//   const msg = JSON.parse(buffer.toString());

//   const amount = msg.addVote ? 1 : -1;
//   DB.CandidateCol.updateOne({ id: msg.id }, { $inc: { votes: amount } }).exec();

//   DB.UserCol.findOneAndUpdate(
//     { _id: msg.user._id },
//     { votes: msg.user.votes },
//     {
//       upsert: true,
//       new: true,
//     },
//     function (err, doc) {
//       console.log(err, doc);
//     }
//   );
// }

// server = app.listen(4000, () => {
//   console.log(`Listening on 4000`);
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
//   ws.on('message', async function message(data) {
//     await updateCandidates(data);
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