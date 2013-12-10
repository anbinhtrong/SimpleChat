var net = require('net');
var chatServer = net.createServer();
chatServer.on('connection', function(client){
	client.write('Server chat program\n');
	client.on('data', function(data){
		console.log(data.toString());
	});
});
chatServer.listen(1001);