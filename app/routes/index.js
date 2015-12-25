var config = require('../config.default');
var express = require('express');
var ueditor = require("ueditor");
var path = require('path');
var router = express.Router();
router.use("/", ueditor(path.join(__dirname, 'statics'), function(req, res, next) {
    // ueditor 客户发起上传图片请求
    if (req.query.action === 'uploadimage') {
        var foo = req.ueditor;
        var date = new Date();
        var imgname = req.ueditor.filename;

        var img_url = '/img/ueditor/';
        res.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
    }
    //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        var dir_url = '/img/ueditor/';
        res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
    }
    // 客户端发起其它请求
    else {
        res.render('index', {title:'首页',info: config.info});
        // console.log('config.json')
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/js/ueditor/nodejs/config.json');
    }

}));
router.get('/', function(req, res, next) {
  res.render('index', {title:'首页',info: config.info});
});
module.exports = router;
