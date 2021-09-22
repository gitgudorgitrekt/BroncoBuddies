var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!<br>"));
  res.write("CS 4800 - William Armstrong");
  res.end();
}).listen(8080); 