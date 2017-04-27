var express = require('express');
var countries = require('./countries.json');

var app = express();

app.use(function(req, res,next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
}
);

app.get('/',function(req, res){
	//res.json({"test":"Hey! I am response from Node!"});
	res.json(countries);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});