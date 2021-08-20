const http = require('http');
const serverHandle = require('../app');

const PORT = 9999;
const serve = http.createServer(serverHandle);
serve.listen(PORT);
console.log('Server running at http://127.0.0.0:9999');
