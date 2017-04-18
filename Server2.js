//created the http call which allows server data to be stored

var http = require('http');

//specifies which port each server will use

var PORT = 7000;

var PORT2 = 7500;

//functions that tell your server what to do when it is run

function handleRequest(request, response) {

		response.end('You look very nice today ' + request.url);

}

function handleRequest2(request, response) {

		response.end('You always look bad ' + request.url);

}

//create the actual servers and pass the functions that tell them what to do

var server = http.createServer(handleRequest);

var server2 = http.createServer(handleRequest2);


//listener event that make the server listen to which port it is on and console log a path

server.listen(PORT, function() {
	console.log('Server listening on : http://localhost:' + PORT);
})

server2.listen(PORT2, function() {
	console.log('Server listening on : http://localhost:' + PORT2);
})