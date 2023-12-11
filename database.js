// const { MongoClient } = require('mongodb');

// const userName = 'user';
// const password = 'pass';
// const hostname = 'mongodb.com';

// const url = `mongodb+srv://${user}:${pass}@${mongodb.com}`;

// const client = new MongoClient(url);

// const collection = client.db('rental').collection('house');

// const house = {
//   name: 'Beachfront views',
//   summary: 'From your bedroom to the beach, no shoes required',
//   property_type: 'Condo',
//   beds: 1,
// };
// await collection.insertOne(house);

// const cursor = collection.find();
// const rentals = await cursor.toArray();
// rentals.forEach((i) => console.log(i));

// //OUTPUT
// // [
// //     {
// //       _id: new ObjectId('639a96398f8de594e198fc13'),
// //       name: 'Beachfront views',
// //       summary: 'From your bedroom to the beach, no shoes required',
// //       property_type: 'Condo',
// //       beds: 1,
// //     },
// //   ];


// const query = { property_type: 'Condo', beds: { $lt: 2 } };

// const options = {
//   sort: { price: -1 },
//   limit: 10,
// };