'use strict';
const express = require('express');
const app = express();

require('./server/express.js')(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})