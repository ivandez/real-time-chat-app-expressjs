const socket = io()

const form = document.querySelector('#form')
const input = document.querySelector('#input')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (input.value) {
    socket.emit('chat message', input.value)
    input.value = ''
  }
})

socket.on('chat message', (message) => {
  console.log(message)
})

socket.on('notification', (notification) => {
  console.log(notification)
})
