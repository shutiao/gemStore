/* global __dirname */
var express = require('express'),
    app = express(),
	cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
//Anything you put in the /public folder can now be requested by your browser and displayed.
app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.render('index.html');
});

app.get('*', function(req, res){
	res.status(404).send('Page Not Found')
});

app.listen(8080);
console.log('Express server started on port 8080');

