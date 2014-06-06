var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('views', __dirname + "/views");

app.get('/', function(req, res) {
	res.sendfile(app.get('views') + '/index.html');
});

server.listen(3000, function() {
	console.log("Server running on port 3000");
});