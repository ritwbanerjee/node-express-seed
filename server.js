'use strict';
const express = require('express');
const app = express();

require('./server/express.js')(app);

app.listen(4000, function () {
})