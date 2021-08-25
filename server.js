const express = require('express');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
require('dotenv').config();

// initialize express app
const app = express();

// make contact the first page on the app
app.route("/").get(function(req, res) {
    res.sendfile(process.cwd() + "/public/index.html");
});

// set port for testing
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});