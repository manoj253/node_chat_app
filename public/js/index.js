var socket = io();
	socket.on('connect',function (){
		console.log('Connected to server');
		socket.on('newMessage',function(msg){
			console.log(msg)
		});
	});
	socket.on('disconnect',function (){
		console.log('disconnected to server')
	})