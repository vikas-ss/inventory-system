var express=require('express');
var bodyParser = require('body-parser');
const fs=require('fs');
const products = require("./routes/products");
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Expose-Headers', 'token')
  next();
});

app.get('/',function(req,res) {
  //res.send('Hello World!');
  res.send("Welcome page ... ");

});
app.use(bodyParser.json());
app.use("/products", products);

const port = process.env.PORT || 3000;

var server=app.listen(port, function() {

  console.log("Server Started");

});