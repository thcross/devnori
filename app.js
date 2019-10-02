var express = require('express');
var app = express();
const route = require('./route.js');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false }));

app.set('html', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));
app.use('/', route);

app.use((req, res, next) => { // 404 처리 부분
  res.status(404).send('일치하는 주소가 없습니다!');
});

app.use((err, req, res, next) => { // 에러 처리 부분
  console.error(err.stack); // 에러 메시지 표시
  res.status(500).send('서버 에러!'); // 500 상태 표시 후 에러 메시지 전송
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});