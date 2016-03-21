var http = require('http');

var server = http.createServer(function (request, response){
	console.log('request starting...');
	// Writes to browser html body
	response.write('Hello Client!');
	response.end();
});

server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
