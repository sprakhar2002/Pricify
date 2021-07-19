var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

// Static files
app.use(express.static('public'));


//getting prices




// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('send', (data) =>{
        console.log(data);
        var ws=require('ws')

let price = new ws("wss://ws.finnhub.io?token=c3oaikiad3ia07ueoia0");

price.onopen = function(e) {
  console.log("[open] Connection established");
  console.log("Sending to server");
    price.send('{"type":"subscribe","symbol":"AAPL"}')
    price.send('{"type":"subscribe","symbol":"AMZN"}')
    price.send('{"type":"subscribe","symbol":"MSFT"}')
    price.send('{"type":"subscribe","symbol":"IC MARKETS:1"}')
   price.send('{"type":"subscribe","symbol":"BINANCE:BTCUSDT"}');

};


price.onmessage = function(event) {
    //console.log(event.data)
    var c=JSON.parse(event.data)["type"]
    if(c=="trade")
    {var a=JSON.parse(event.data)["data"][0]["s"];
    var b=JSON.parse(event.data)["data"][0]["p"];
    socket.emit('chat', {
        name: a,
        pri: b
    });}
    else
    console.log(event.data)
  };
  socket.on('stop', (data)=>{
      price.close()
      console.log('close')
  })


        
    });

});
