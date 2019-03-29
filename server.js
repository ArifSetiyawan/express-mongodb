const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// default route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to FamilyPlanning"});
});

// listen on port 5000
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
