var http=require('http'),
    fs=require('fs'),
    pathname=require('pathname');
var server=http.createServer('',function(){
    console.log('hello')
})
server.listen(8080)
