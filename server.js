var express = require('express');
var slideApp = express();
var remoteApp = express();

const IP = require('ip');


slideApp.use('/node_modules', express.static(__dirname + '/node_modules'));
slideApp.use('/dist', express.static(__dirname + '/dist'));
slideApp.use(express.static('public'));

remoteApp.use('/node_modules', express.static(__dirname + '/node_modules'));
remoteApp.use('/dist', express.static(__dirname + '/dist'));
remoteApp.use(express.static('public/remote'));

var slideserver = slideApp.listen(8000);
var remoteserver = remoteApp.listen(8001);


const WebSocket = require('ws');

const bridgeToRemoteServer = new WebSocket.Server({port: '8002'});
const bridgeToSlidesServer = new WebSocket.Server({port: '8003'});
var bridgeToSlidesServerSocket;

bridgeToSlidesServer.on('connection', function connection(ws) {
    bridgeToSlidesServerSocket = ws;
    ws.send(IP.address());
});


bridgeToRemoteServer.on('connection', function connection(ws) {
    ws.on('error', console.error);
  
    ws.on('message', function message(data) {
        bridgeToSlidesServerSocket.send(data.toString());
    });
});
