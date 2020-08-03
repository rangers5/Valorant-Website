const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Import ENV vars
dotenv.config({ path: './config.env'});

//Set port for the server to run on
const port = process.env.PORT || 8000;

//Create the server
const server = express();

//Set up the routes for the server to use
server.use('/api/v1/profile', require('./routes/getStats'));
server.use('/', require('./routes/homepage'));
server.use('/assets', require('./routes/assets'));
//Start the server
server.listen(port, () => {
   console.log(`Server running on port ${port}!!!`);
})