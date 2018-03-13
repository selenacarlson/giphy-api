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
        res.sendStatus(500);
        console.log('error on giphy request', error);
    })
})

router.post('/search', function(req, res){
    let search = req.body.search;
    let url = `http://api.giphy.com/v1/gifs/search?q=${search}${apiKey}`
    console.log(search);

    axios.get(url)
    .then( function(response){
        res.send(response.data);
    })
    .catch( function(error){
        res.sendStatus(500);
        console.log('error on giphy request', error);
    })
})


module.exports = router;