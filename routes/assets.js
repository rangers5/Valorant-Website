const express = require('express');
const route = express.Router();
const path = require('path')

//Will send any requested assets if they exist

route.get('/:filename', (req, res) => {
   const {filename} = req.params;
   res.sendFile(path.join(path.dirname(__dirname) + `/assets/${filename}`));
});      

//Export it 
module.exports = route;