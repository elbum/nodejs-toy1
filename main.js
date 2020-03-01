console.log('starting');//<--------------------------------------- added line

var http = require('http');
var fs = require('fs');
var url = require('url');
var CORS = require('cors')();

function templateHTML(title, list, body) {
  return (
    `
  <!doctype html>
<html>
<head>
  <title>WEB1 - ${title} </title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="/">WEB112</a></h1>
  ${list}
  <a href="/create">create</a>
  ${body}
</body>
</html>
  `);

}

function templateList(filelist) {
  var data = filelist;
  var list = '<ul>';

  var i = 0;
  while (i < data.length) {
    console.log(data[i]);
    list = list + `<li><a href="/?id=${data[i]}">${data[i]}</a></li>`
    i = i + 1;
  }
  list = list + '</ul>';
  return list;
}

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  var title = queryData.id;
  // console.log(queryData);
  // console.log(url);
  console.log('hi');
  console.log(url.parse(_url, true).pathname);

  // if (_url == '/') {
  //   title = 'Welcome';
  //   // _url = '/index.html';
  // }
  // if (_url == '/favicon.ico') {
  //   return response.writeHead(404);
  // }
  // response.writeHead(200);
  console.log('pathname =', pathname);

  if (pathname === '/') {
    if (queryData.id === undefined) {
      console.log('undefined phrase');

      fs.readdir('./data/', function (err, data) {
        // console.log(data);
        var title = "welcome root";
        var description = "Hello. Node.js";
        var list = templateList(data);

        var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
        response.end(template);
      });


    } else if (pathname === '/create') {
      console.log('create!')
    } else {
      console.log('else')
      fs.readdir('./data/', function (err, data) {
        // console.log(data);
        var title = "welcome root";
        var description = "Hello. Node.js";
        var list = templateList(data);

        fs.readFile(`./data/${queryData.id}`, 'utf8', function (err, description) {
          var description = description;



          var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);

          response.writeHead(200);
          response.end(template);
        });
      })
    }
  }
});
// app.use(CORS);
app.listen(3000);