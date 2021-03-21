const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
//app.listen(port);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

  http.listen(port, () => {
   console.log(`Socket.IO server running at http://localhost:${port}/`);
 }); 