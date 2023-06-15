var express = require('express');
var router = express.Router();

router.get('/ad_management', function(req, res, next) {
    res.render('advertisement/ad_management');
});

module.exports = router;