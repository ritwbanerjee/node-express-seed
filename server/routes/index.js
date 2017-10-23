'use strict';

module.exports = function(app) {

    app.post('/getSearchData', (req, res) => {
        const data= require('../controller/getSearchData')(app, req);
        res.send(data);
    });

    app.post('/getSearchFeedBack', (req, res) => {
        res.send({
            "status": 200
        })
    });
}