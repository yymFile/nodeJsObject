var config = require('../config.default');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect("users/login");
});

router.get('/login', function(req, res, next) {
  res.render('users/login', {title:'登录',info: config.info});
});

module.exports = router;
