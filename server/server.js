const express = require('express');
const app = express();

app.use(express.static('server/public'));

let env = require('dotenv');
env.config();

let giphyRouter = require('./routers/giphy-router');
app.use('/giphy', giphyRouter);

let port = process.env.PORT || 5000;
app.listen(port, function(req, res){
    console.log('Listening on port', port);
})