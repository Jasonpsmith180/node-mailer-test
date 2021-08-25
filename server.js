const express = require('express');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
require('dotenv').config();

// set port for testing
const PORT = process.env.PORT || 5000;

// initialize express app
const app = express();

// make contact the first page on the app
app.route("/").get(function(req, res) {
    res.sendfile(process.cwd() + "/public/index.html");
});


// express server listening
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});