const express = require('express');
const fetch = require('node-fetch');
const route = express.Router();

//Create the route to get the profile
route.get('/:steamID', async (req, res) => {
   try {
      //Get the variables we need from the request
      const {steamID} = req.params;

      //Set the header to send to the API
      const headers = {
         'TRN-Api-Key': process.env.API_KEY
      }

      //Slap the API
      const response = await fetch(`${process.env.API_URL}/steam/${steamID}`, { 
         headers
      });

      //Wait for the response
      const data = await response.json();

      //Send the response
      res.json(data);
   } catch (err) {
      //Send an error response if it derps
      console.log(err);
      res.status(500).json({
         message: 'Internal Server Error'
      });
   }
});

//Export it 
module.exports = route;