/**
 * Created by saqib on 10/16/2017.
 */
const express       = require('express');
const app           = express();
const mongoose      = require('mongoose');
const config        = require('./config/database');
const path          = require('path');


//mongoose.promise    = global.promise;
mongoose.connect(config.uri, {useMongoClient: true},(err) => {
    if(err){
        console.log('Could not connect to database: ', err);
    } else {
        console.log('connected to database '+ config.db);
    }
});

app.use(express.static(__dirname+'/client/dist/'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'))
});

app.listen(3600, () => {
    console.log("Listening to port: 3600");
});
