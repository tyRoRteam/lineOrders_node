const express = require('express'); //require express module

const App = express(); //creates an Express application

 //Express API --------- App.get('path', callback function);
 //routes HTTP GET requests to the specified path with the specified callback functions
App.get ('/', function (request, response) {
	response.send("response from node service");
});

App.post ('/ajax', function (request, response) {
	response.send("response by ajax");
});

//The 'process' object is a global that provides information about, and control over, the current Node.js process.
//As a global, it is always available to Node.js applications without using require().
//The 'process.env' property returns an object containing the user environment.
//you can set the environment variable 'PORT' to tell your web server what port to listen on.
const port = process.env.PORT || 3000;
//whatever is in the environment variable 'PORT', or 3000 if there's nothing there

//binds and listens for connections on the specified host and port. This method is identical to Node’s http.Server.listen().
App.listen(port);

console.log(`MERN Stack listening on ${port}`);