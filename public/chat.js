const socket = io()

//Elements by Id

let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', ()=>{
    socket.emit('chat-message',{        
        message: message.value,
        username: username.value
    });
});

message.addEventListener('keypress', ()=>{
    socket.emit('chat-typing', username.value)
})

socket.on('chat-typing', (data)=>{
    actions.innerHTML = `<p>${data} está escribiendo</p>`
})
socket.on('chat-message', function(data){
    actions.innerHTML = '';
    output.innerHTML += `<p><strong>${data.username}</strong>: ${data.message}</p>`
})


