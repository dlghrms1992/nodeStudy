var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);

});
app.listen(3000);
// http : protocol -> 웹브라우저와 웹서버가 데이를 주고받기위한 통신규칙
// domainName or hostName -> ip 주소 특정한 컴퓨터
// port : 어떤 port에 연결되어 있는 서버 통신
// ?xxx&xxxx =>queryStirng
