'use strict';
const express = require('express'),
      app = express(),
      port = process.env.PORT || 4000;

require('./server/express.js')(app);

app.listen(port, function () {
    console.log("Environment: ", process.env.ENV);
    console.log("Port: ", port);
})