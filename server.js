var express = require('express');
var slideApp = express();
var remoteApp = express();


slideApp.use('/node_modules', express.static(__dirname + '/node_modules'));
slideApp.use('/dist', express.static(__dirname + '/dist'));
slideApp.use(express.static('public'));

remoteApp.use('/node_modules', express.static(__dirname + '/node_modules'));
remoteApp.use('/dist', express.static(__dirname + '/dist'));
remoteApp.use(express.static('public/remote'));

var slideserver = slideApp.listen(8000);
var remoteserver = remoteApp.listen(8001);


const WebSocket = require('ws');
const server2 = new WebSocket.Server({port: '8080'});

server2.on('connection', socket => {
    socket.send('Roger That!');
});