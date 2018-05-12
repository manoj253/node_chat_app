const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

var app = express();
var port = process.env.PORT || 3000;

var server = http.createServer(app);
var io = socketIO(server);
io.on('connection',(socket)=>{
	console.log("New user connection");
	socket.on('disconnect',()=>{
		console.log('user disconnected')
	});
	
	socket.on('createMessage',(msg)=>{
		// console.log(msg)
		io.emit('newMessage',{
			from:msg.from,
			text:msg.text,
			createdAt:new Date().getTime()
		})
	})

})

const publicPath = path.join(__dirname ,'../public')
app.use(express.static(publicPath));

server.listen(port,()=>{
	console.log(`server is running on port ${port}`)
})