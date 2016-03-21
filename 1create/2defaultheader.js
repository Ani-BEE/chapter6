var http = require('http');

var server = http.createServer(function (req, res){
	console.log('Request headers....');
	console.log(req.headers);

	res.write('Hello Client!');
	res.end();
}).listen(3000);

console.log('Server running on Port 3000');
