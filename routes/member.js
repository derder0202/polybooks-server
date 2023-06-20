var express = require('express');
var router = express.Router();

router.get('/add_regular_member', function(req, res, next) {
    res.render('regular_member/add_regular_member');
  });
  router.get('/edit_regular_member', function(req, res, next) {
    res.render('regular_member/edit_regular_member');
  });
  router.get('/list_regular_member', function(req, res, next) {
    res.render('regular_member/list_regular_member');
  });
  router.get('/update_regular_member', function(req, res, next) {
    res.render('regular_member/update_regular_member');
  });
  router.get('/change_password', function(req, res, next) {
    res.render('regular_member/change_password');
  });


module.exports = router;