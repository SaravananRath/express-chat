const socket = io.connect('http://localhost:8000')
socket.on('connect', data => {
  socket.emit('join', 'Hello server from client')
})
