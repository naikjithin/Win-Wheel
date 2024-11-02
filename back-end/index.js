const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

// create express app
const app = express();

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
const userData = require('./controllers/userdata.controller.js');

// Create a new Userdata
app.post('/userdata', userData.create);

// Retrieve all Userdata
app.get('/userdata', userData.findAll);

app.get('/getxls', userData.getxls);

// Retrieve a single Userdata with noteId
app.get('/userdata/:userId', userData.findOne);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});