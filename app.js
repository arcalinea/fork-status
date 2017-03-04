var express = require('express');
var server = express();
var path = require('path');
var exec = require('child_process').exec;
const pug = require('pug');

var checkFork = require('./checkfork');
var forkStatus = checkFork()

server.use(express.static(path.join(__dirname, 'public')));
server.set('view engine', 'pug');

server.get('/', function(req, res){
  console.log("In /: ", forkStatus)

  const compiled = pug.compileFile('./public/template.pug');

  res.send(compiled({
    forkStatus: forkStatus
  }));

});

server.listen(3000, function () {
  console.log('Basic testnet app on port 3000!');
});

exec('date -u',function(err,stdout,stderr){
      console.log(stdout);
 })
