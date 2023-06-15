var express = require('express');
var router = express.Router();

router.get('/account_statistics', function(req, res, next) {
  res.render('statistical/account_statistics');
});
router.get('/aution_statistics', function(req, res, next) {
  res.render('statistical/aution_statistics');
});
router.get('/books_sale_statistics', function(req, res, next) {
  res.render('statistical/books_sale_statistics');
});
router.get('/stall_statistics', function(req, res, next) {
  res.render('statistical/stall_statistics');
});
router.get('/transaction_statistics', function(req, res, next) {
  res.render('statistical/transaction_statistics');
});

module.exports = router;
