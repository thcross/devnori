var http = require('http');
var app = require('express');
var fs = require('fs');
var mysql      = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static('public'));

var connection = mysql.createConnection({
  host     : 'ec2-3-17-138-216.us-east-2.compute.amazonaws.com',
  user     : 'semin',
  password : 'semin',
  port     : 3306,
  database : 'othello'
});

connection.connect();

connection.query('SELECT * from semin', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);
});

connection.end();

app.get('/', function (req, res) {
   res.send('Hello wordl!'); 
});

app.listen(3000, function() {
    console.log('aaaa 3000');
});