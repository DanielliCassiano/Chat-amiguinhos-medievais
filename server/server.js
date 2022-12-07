const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.set('views', '../src/pages')
app.set('view engine', 'js')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const rooms = { }

app.get('/', (req, res) => {
  res.render('index', {rooms: rooms })
})

app.post('/room', (req, res) => {
  if(rooms[req.body.room] != null) {
    return res.redirect('/')
  }
  rooms[req.body.room] = {users: {} }
  res.redirect(req.body.room)
})

app.get('/:room', (req, res) => {
  if (rooms[req.params.room] == null) {
    return res.redirect('/')
  }
  res.render('room', {roomName: req.params.room })
})

server.listen(3000);

io.on('connection', socket => {
  socket.on('new-user', (room, name) => {
    socket.join(room)
    rooms[room].users[socket.id] = name
    socket.to(room).broadcast.emit('user-connected', name)
})
  socket.on('send-new-message', (room, message) => {
    socket.to(room).broadcast.emit('message', { message: message,
      name: rooms[room].users[socket.id]})
  })
  socket.on('disconnect', () => {
    getUserOnRooms(socket).array.forEach(room => {
      socket.to(room).broadcast.emit('user-disconnected', room[room].users
      [socket.id])
      delete rooms[room].users[socket.id]
    })
  })
})

  function getUserOnRooms(socketUser) {
    return Object.estries(rooms).reduce((names, [name, room]) => {
      if(room.users[socketUser.id] !=null) names.push(name)
      return names
    }, [])
  }