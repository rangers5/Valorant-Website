const express = require('express');
const route = express.Router();
const path = require('path')


//This is the route for all objects in the home page
//If you want to add another asset/script/ect, add a route for it here\

//Create the route for 4weird
route.get('/logo.bmp', (req, res) => {
   res.sendFile(path.join(path.dirname(__dirname) + '/assets/logo.bmp'));
});      

//Export it 
module.exports = route;