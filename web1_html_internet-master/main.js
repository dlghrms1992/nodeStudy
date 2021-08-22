var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname + url);
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(3000);
// http : protocol -> 웹브라우저와 웹서버가 데이를 주고받기위한 통신규칙
// domainName or hostName -> ip 주소 특정한 컴퓨터
// port : 어떤 port에 연결되어 있는 서버 통신
