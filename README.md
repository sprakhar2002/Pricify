# PRICIFY
<br>

This web app will display the real time stock prices of the stocks 



You can add more stocks using the server side index.js


To start the server use nodemon 

```
nodemon index
```

make sure you have 'express' 'socket.io' 'nodemon' 'websockts' 'dotenv' installed in your system 

Get an API Key from https://finnhub.io/ and put your API_KEY in .env file *See the env_sample file*



After running the server


Open
http://localhost:4000
on your browser 

<br>

*Make Sure the Market is open or you will not recieve live prices of some of the stocks*

<br>

![Alt text](images/opening.png?raw=true "Title")

<br>
<br>

Now click on "recieve data" to recieve stock prices
<br><br>

![Alt text](images/working.png?raw=true "Title")

<br><br>

To stop recieving data click Stop

