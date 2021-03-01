const express = require('express');
const app = express();


app.use(require('./routes/authentication'));


app.listen(3001, () => {
  console.log('listening on port 3001')
})




// const jwt = require('jwt-simple'); // create a jwt token
// // user information 
// let userInfo = {
//     id: '12345',
//     userName: 'Veronica',
//     email: 'me@me.com'
// }
// // create a function that returns a jwt token
// const token = (user) => {
//     let timestamp = new Date().getTime(); //current time
//     return jwt.encode({sub: user.id, name: user.username, iat: timestamp}, 'buiguyvyyhviu'); //encode creates token
// }
// // call a function and pass our user
// let jwtToken = token(userInfo);
// console.log(jwtToken);
