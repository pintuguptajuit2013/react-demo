var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res) {
    var filePath = path.join('.', req.url);
    fs.readFile(filePath, function(err, data) {
        if(err) {
            console.log(err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end(err.message);
        } else {
            res.writeHead(200, {'Content-Type' : 'text/plain'})
            res.end(data);
        }
    });
});

server.listen(3000, function() {
    console.log("Server is listening on port 3000");
});