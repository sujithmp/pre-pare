/* importing http modules */
const http = require('http');

/* configure port and host to which server listen to */
const port = '3000';
const hostname =  '127.0.0.1';

/* creating server */

http.createServer( ( req, res) => { 
	/* set http header status and content type */
	res.writeHead('200', {'Content-Type': 'text/html'});
	
	res.end("<h1>Hello\n<h1>");
}).listen(port,hostname, ( ) => { 

	console.log(`Server running  at the port http://${hostname}:${port}/`);

});