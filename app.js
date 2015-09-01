/* global __dirname */
var express = require('express'),
    app = express(),
	path = require('path');

//Anything you put in the current folder can now be requested by your browser and displayed.
app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views', 'index.html'));
});

app.get('/products.json', function(req, res){
	res.send(gems);
})

/*
app.get('*', function(req, res){
	res.status(404).send('Page Not Found')
});
*/

app.listen(8080);
console.log('Express server started on port 8080');

var gems = [
            {
            name: 'Azurite',
            price: 110.50,
            images: [
                    "images/gem-02.gif",
                    "images/gem-05.gif",
                    "images/gem-09.gif"
                    ]
            },
            {
            name: 'Bloodstone',
            description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
            shine: 9,
            price: 22.90,
            rarity: 6,
            color: '#EEE',
            faces: 12,
            images: [
                    "images/gem-01.gif",
                    "images/gem-03.gif",
                    "images/gem-04.gif",
                    ],
            }
            ];