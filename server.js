var express = require('express');
var app = express();


app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/dist', express.static(__dirname + '/dist'));

app.use(express.static('public'));

var server = app.listen(5000);

const WebSocket = require('ws');
const server2 = new WebSocket.Server({port: '8080'});

server2.on('connection', socket => {
    socket.send('Roger That!');
});