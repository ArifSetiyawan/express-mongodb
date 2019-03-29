const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configuring the database
const config = require('./config/config');
const mongoose = require('mongoose');

//Add route file here
require('./routes/contraception')(app);
require('./routes/province')(app);
require('./routes/wearer_contraception')(app);

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// default route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to FamilyPlanning"});
});

// listen on port 5000
app.listen(config.serverport, () => {
    console.log("Server is listening on port 5000");
});
