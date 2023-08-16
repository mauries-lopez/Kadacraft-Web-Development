// import module `express`
const express = require('express');

const controller = require('../controllers/controller.js')

const app = express();

// Index settings
app.get('/', controller.getIndex);
app.get('/world', controller.getWorld);
app.get('/profile', controller.getProfile);

// Error page
app.get('/Error', controller.getError);


/*
    exports the object `app` (defined above)
    when another script exports from this file
*/
module.exports = app;