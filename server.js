const express = require('express')
const app = express()
const server = require('http').Server(app)

app.set('views', './views')
app.set('view engine', 'ejs')
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