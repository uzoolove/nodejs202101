const net = require('net');
var target = {
  host: 'localhost',
  port: 1234
};

// 1. 소켓 생성
var socket = new net.Socket();
// 2. 서버 접속
socket.connect(target.port, target.host, function(){
  console.log(`서버 접속. ${target.host}:${target.port}`);
  // 3. 서버와 메세지 송수신
  socket.write('hello');
  socket.on('data', function(data){
    console.log('서버로부터 수신한 메세지: ' + data);
  });
});

