const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('<h1>Hello, this is a secure server!</h1>');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});