const http = require('http');
const express = require('express');
const app = express();

app.get('/', (res, req) => {

});

app.set('port', 3000);
const server = http.createServer(app);

server.listen(3000);