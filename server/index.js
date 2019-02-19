const express = require('express');

const parser = require('body-parser');

const path = require('path');

const router = require('./routes.js');

// const PORT = 4000;
const app = express();
app.use(parser.json());
app.use(parser.urlencoded({ extened: false }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);
// app.listen(PORT, console.log('listening to port: ', PORT));

module.exports= app;

//this is the js. file I would like to test,  I will also import this file to do the test