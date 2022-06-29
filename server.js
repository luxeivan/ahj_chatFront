const WS = require('ws');
const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req, res);
  res.end('response');
});

console.log(server);
let openUsers = [];

const wss = new WS.Server( {server} );


wss.on('connection', (ws) => {
  ws.username = '';
  ws.on('message', data => {
    const obj = JSON.parse(data);
    console.log('received: %s', data);
    if (obj.register) {
      if (!openUsers.includes(obj.register, 0)) {
        openUsers.push(obj.register);
        ws.username = obj.register;
        console.log(ws.username);
        ws.send(JSON.stringify({ openUsers, currentUser: obj.register }));
        Array.from(wss.clients).filter(o => o.readyState === ws.OPEN).forEach(o => o.send(JSON.stringify({ openUsers })));
      } else {
        console.log(wss.clients);
        ws.send(JSON.stringify({ userIncorrect: true }));
      }
    } else {
      Array.from(wss.clients).filter(o => o.readyState === ws.OPEN).forEach(o => o.send(JSON.stringify(obj)));
    }

  });


  //ws.send(JSON.stringify({ user: 'Dima', message: 'GQwerty' }));
});
setInterval(() => {
  const newListUser = [];
  Array.from(wss.clients).filter(o => o.readyState === 1).forEach(o => {
    newListUser.push(o.username);
  });
  openUsers.forEach((item, index) => {
    if (!newListUser.includes(item, 0)) {
      openUsers.splice(index, 1)
      Array.from(wss.clients).filter(o => o.readyState === 1).forEach(o => o.send(JSON.stringify({ openUsers })));
    }
  });
}, 1000);
server.listen(8081);
console.log('start');