var https = require('https')
var fs = require('fs')

const PORT = aquariapp.com

fs.readFile('./index.html', function(error, html){
    if (error) throw error;
    https.createServer(function(request, response){
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
}).listen(PORT)
});