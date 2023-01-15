//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post('/', function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send('Result: ' + result);
});

app.get('/bmi', function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmi', function (req, res) {
  var weight = parseFloat(req.body.num1);
  var height = parseFloat(req.body.num2);
  var result = weight / (Math.pow(height, 2));
  res.send('Result: ' + result);
});


app.listen(3000, function() {
  console.log('app listening on 3000');
});
