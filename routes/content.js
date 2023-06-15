var express = require('express');
var router = express.Router();

router.get('/book_approval', function(req, res, next) {
    res.render('content_approval/book_approval');
});
  router.get('/new_approval', function(req, res, next) {
    res.render('content_approval/new_approval');
});

  
module.exports = router;