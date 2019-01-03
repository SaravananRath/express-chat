const socket = io.connect('http://localhost:8000')
socket.on('connect', data => {
  socket.emit('join', 'Hello server from client')
})

socket.on('thread', (data) => {
  $('#messages').append('<li>' + data + '</li>')
})

$('form').submit((e) => {
  e.preventDefault()
  let message = $('#typing').val()
  socket.emit('messages', message)
  this.reset()
  return false
})