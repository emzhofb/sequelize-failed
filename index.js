// we want to use express, so we need to import first
const express = require('express');
// use express
const app = express();
// this is for address port
const port = 3000;

// import routing so we can register the route
const charaRouters = require('./routes/chara');

// we use json for get the req body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use the router or register it
app.use('/', charaRouters);

app.listen(port, () => {
  console.log(`Listening on port`, port);
});
