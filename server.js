var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(server)

app.get('/', function (req, res, next) {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.use(express.static('public'))

io.on('connection', client => {
  console.log('Client Connected...')

  client.on('join', data => {
    console.log(` This is the ${data}`)
  })

  client.on('messages', data => {
    client.emit('thread', data)
    client.broadcast.emit('thread', data)
  })
})
server.listen(8000)
