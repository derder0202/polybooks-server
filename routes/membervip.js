var express = require('express');
var router = express.Router();

router.get('/list_vip_member', function(req, res, next) {
    res.render('vip_member/list_vip_member');
  });
  router.get('/payment_vip_member', function(req, res, next) {
    res.render('vip_member/payment_vip_member');
  });
  router.get('/update_vip_member', function(req, res, next) {
    res.render('vip_member/update_vip_member');
});

module.exports = router;