// const http=require('http')
// const server=http.createServer((req,res)=>{
//      res.writeHead(200,{'content-type':'text/html'});

//      res.write('<h1> HELLO ALL !!</h1><h2>WELCOME TO EXPRESS JS</h2>')

//      res.end('<b>END OF STORY</b>')
// })

// server.listen(3333);
// console.log("server listening at port number 3333")

var http = require('http');
var server = http.createServer(function(req,res){
var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
switch(path) {
case '' :
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('<h1>Home Page</h1>');
break;
case '/about' :
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('<h1>About us</h1>');
break;
default:
res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end('Not Found');
break;
}
});
server.listen(3000);
console.log("server listening at port number 3000")