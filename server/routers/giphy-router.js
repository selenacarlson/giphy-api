const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiKey = process.env.GIPHY_API_KEY;

router.get('/random', function(req, res){
    let url = `http://api.giphy.com/v1/gifs/random?${apiKey}`;

    axios.get(url)
    .then( function(response){
        res.send(response.data);
    })
    .catch( function(error){
        res.sendStatus('error on giphy request', error);
    })
})





module.exports = router;