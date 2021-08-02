const socket = io()

const form = document.querySelector('#form')
const input = document.querySelector('#input')
const messages = document.querySelector('#messages')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (input.value) {
    socket.emit('chat message', input.value)
    input.value = ''
  }
})

socket.on('chat message', function (msg) {
  const item = document.createElement('li')
  item.textContent = msg
  messages.appendChild(item)
  window.scrollTo(0, document.body.scrollHeight)
})

socket.on('notification', (notification) => {
  messages.innerHTML +=
              '<li style="background: #ffc107">' + notification + '</li>'
})
