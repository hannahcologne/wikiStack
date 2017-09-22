// Where your server and express app are being defined:
var express = require('express');
var app = express();
var models = require('./models');
var morgan = require('morgan');
var bodyparser = require('body-parser')


// models.db.sync({force: true});

// ... other stuff

models.Page.sync({})
.then(function () {
  console.log("models is running too!")
    return models.User.sync({})
})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);
