const http = require('http');
const httpProxy = require('http-proxy');

const targetUrl = 'https://jsonplaceholder.typicode.com';
const proxy = httpProxy.createProxyServer();

const server = http.createServer((req, res) => {

    proxy.web(req, res, { target: targetUrl });

    console.log(`Proxy request to: ${targetUrl + req.url}`);
});

proxy.on('error', (err, req, res) => {
    console.error('Proxy Error:', err);
    res.writeHead(500, {
        'Content-Type': 'text/plain',
    });
    res.end('Proxy Error');
});

server.listen(3002, () => {
    console.log('Proxy server is running on http://localhost:3002');
});
