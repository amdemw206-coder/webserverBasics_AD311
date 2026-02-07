import http from 'node:http';
import fs from 'node:fs';


const host = 'localhost';
const port = 3000;

// 1. Create the server
const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        fs.readFile('home.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading home.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`<html><body><h1>This is HTML</h1></body></html>`);
            }
        });
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About page!');
    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

// 2. Tell the server to actually start listening
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});