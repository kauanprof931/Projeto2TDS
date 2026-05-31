// Código para ativar seu servidor local

const http = require('http');

http.createServer((req, res) => {  
    res.writeHead(200, {'Content-Type': 'text/plai'});
    res.end('Site do Professor');
}).listen(6568);

console.log('Servidor rodando em http://localhost:6568/');