var express = require('express');
var router = express.Router();

router.get('/list_aution_post', function(req, res, next) {
    res.render('aution_post/list_aution_post');
});

module.exports = router;