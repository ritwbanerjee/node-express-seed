'use strict';
const express = require('express');
const app = express();
console.log(process.env.ENV);

require('./server/express.js')(app);

app.listen(4000, function () {
})