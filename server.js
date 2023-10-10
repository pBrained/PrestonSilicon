const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
	const filePath = path.join(__dirname, 'public', 'index.html');

	fs.readFile(filePath, 'utf8', (err, data) => {

		if (err) {
			res.writeHead(500, {'Content-Type': 'test/plain'});
			res.end('Internal Server Error');
			return;
		}

		res.writeHead(200, { 'Content-Type': 'text/html'});
		res.end(data);
	
	});
	
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
	
});