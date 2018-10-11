'use strict';

module.exports = function(app) {
    const bodyParser = require('body-parser'),
          cookieParser = require('cookie-parser');


    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    const admin = require('./routes/admin'),
          user = require('./routes/user');
    app.use('/admin', admin);
    app.use('/user', user);
}