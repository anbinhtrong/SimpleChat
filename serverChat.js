var net = require('net');
var chatServer = net.createServer();
var clientChats = [];
chatServer.on('connection', function(client){
	clientChats.push(client);
	client.write('Server chat program\n');
	client.on('data', function(data){
		console.log(data.toString());
		broadcast(data, client);
	});
	client.on('end', function(){
		clientChats.splice(clientChats.indexOf(client), 1);
	});
});

function broadcast(message, client){
	for(var i = 0; i < clientChats.length; i++){
		if(client != clientChats[i]){
			clientChats[i].write(message);
		}
	}
}
chatServer.listen(1001);