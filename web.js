var express = require('express');
var app = express();

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(express.logger());

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/'));

var domain = process.env.DOMAIN || '';
var port = process.env.PORT || 5000;

app.get('/', function(req, res){
  res.render('index', {
    domain: domain
  });
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
