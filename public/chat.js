// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
//message = document.getElementById('message'),
     // handle = document.getElementById('handle'),
     
     
var     btn = document.getElementById('send'),
btn1=document.getElementById('stop'),
chat=document.getElementById('chat-window'),
      output = document.getElementById('output');


     

// Emit events
btn.addEventListener('click', function(){
  socket.emit('send', "start");
//  message.value = "";
});

btn1.addEventListener('click', function(){
    socket.emit('stop', "stop");
  //  message.value = "";
  });

// Listen for events
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.name + ': </strong>' + data.pri + '</p>';
    chat.scrollTop = chat.scrollHeight;
});