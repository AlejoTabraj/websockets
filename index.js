const path = require('path');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000)


const Socket = require('socket.io')




app.use(express.static(path.join(__dirname, 'public')))



const server = app.listen(app.get('port'), ()=>{
    console.log('Listen in port', app.get('port'));
    
})


const io = Socket(server);

io.on('connection', (socket)=>{
    socket.on('chat-message', (data)=>{
       io.sockets.emit('chat-message', data)
    })

    socket.on('chat-typing', (data)=>{
        socket.broadcast.emit('chat-typing', data);
    })
    
})