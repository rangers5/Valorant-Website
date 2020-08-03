const express = require('express');
const route = express.Router();
const path = require('path')

//Create the route for homepage
route.get('/', (req, res) => {
   res.sendFile(path.join(path.dirname(__dirname) + '/assets/index.html'));
});      

//Export it 
module.exports = route;