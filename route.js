const express = require('express');
const path = require('path');


const router = express.Router(); // 라우터 분리

var mysql      = require('mysql');
var dbconfig   = require('../thcross.github.io/config/database.js');
var connection = mysql.createConnection(dbconfig);
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended : false }));

router.get('/', (req, res) => { // app 대신 router에 연결
  res.render('index.html');
});

router.get('/signup', (req, res) => {
    res.render('signup.html');
});

router.get('/usermain', (req, res) => {
    res.render('usermain.html');
});

router.get('/withHuman', (req, res) => {
    res.render('withHuman.html');
});

router.get('/withAI', (req, res) => {
    res.render('withAI.html');
});

router.get('/forgot', (req, res) => {
    res.render('forgot.html');
});

router.post('/create', function(req, res){
    var body = req.body;
  connection.query('insert into semin(username, password, email) values(?, ?, ?)', [ body.username, body.password, body.email ], function(err, rows) {
    if(err) throw err;

    console.log('sucess!!');
      res.redirect("/");
  });
});

router.post('/signin', function(req, res){
    var body = req.body;
  connection.query('select * from semin where username="' + body.username + '" and password="' + body.password + '"' , function(err, rows) {
    if(err) throw err;

    console.log('login sucess!!');
      res.redirect("/usermain");
  });
});

module.exports = router; // 모듈로 만드는 부분
