var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send({
        data: 'Admin Get request fired'
    });
});

module.exports = router;