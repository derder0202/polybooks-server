var express = require('express');
var router = express.Router();

router.get('/account_statistics', function(req, res, next) {
  res.render('statistical/account_statistics');
});


module.exports = router;
