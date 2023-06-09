var express = require('express');
const {Post} = require("../api_src/model/model");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('authentication/login-page');
});


router.get('/admin_account_info', function(req, res, next) {
  res.render('admin_account/admin_account_info');
});

/* Authentication */

router.get('/login-page', function(req, res, next) {
  res.render('authentication/login-page');
});
router.get('/register-page', function(req, res, next) {
  res.render('authentication/register-page');
});
router.get('/forgot-password-page', function(req, res, next) {
  res.render('authentication/forgot-password-page');
});


module.exports = router;
