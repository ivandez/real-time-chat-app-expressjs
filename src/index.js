const express = require('express')
const path = require('path')

const app = express()
const port = 3000

const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

/**
 * TODO:
 *  1. add user is typing functionality
 */
io.on('connection', (socket) => {
  socket.broadcast.emit('notification', 'new user connected')

  socket.on('disconnect', () => {
    socket.broadcast.emit('notification', 'user disconnected')
  })

  socket.on('chat message', (message) => {
    io.emit('chat message', message)
  })
})

server.listen(port, () => {
  console.log('listening on *:3000')
})
