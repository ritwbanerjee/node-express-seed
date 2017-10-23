'use strict';

module.exports = function(app) {
    var bodyParser = require('body-parser');

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    require('./routes/index')(app);

    app.get('/', (req, res) => {
        res.send('Hello world');
    })
}