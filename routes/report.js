var express = require('express');
var router = express.Router();

router.get('/pending_report', function(req, res, next) {
    res.render('report/pending_report');
});
router.get('/processed_report', function(req, res, next) {
    res.render('report/processed_report');
});

module.exports = router;