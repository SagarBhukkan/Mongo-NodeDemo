// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
const db=client.db('test');


// db.collection('Todos').findOne({age:30}).then((docs)=>{
//     console.log(JSON.stringify(docs,undefined,2));
// });

//   db.collection('Todos').insertOne({
//     name: 'Sagar',
//     age: 25,
//     married: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo', err);
//     }
//       console.log(result.ops[0]._id.getTimestamp());
//     });

  // Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Andrew',
  //   age: 25,
  //   location: 'Philadelphia'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

//   client.close();
});
