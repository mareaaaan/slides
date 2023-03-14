var express = require('express');
var app = express();


//Serves all the request which includes /images in the url from Images folder
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use('/dist', express.static(__dirname + '/dist'));

app.use(express.static('public'));

var server = app.listen(5000);