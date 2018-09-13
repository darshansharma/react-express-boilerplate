import express from 'express';
import path from 'path';
//import webpackConfig from 'webpack.config.babel.js';
import webpacDevMiddleware from 'webpack-dev-middleware';
import middleware from './middleware';
//import pgp from 'pg-promise';
import websocket from 'ws';
var pgp = require('pg-promise')();

const app = express();
let webSocket;
var db = pgp('postgres://darshan:block8@localhost:5432/testdb');

const socket = new websocket.Server({ port: 8081 });

socket.on('connection', function connection(ws) { //ws is listening to connection
	webSocket = ws;
		ws.on('message', function incoming(message) {// triggers when client send message
			console.log('received: %s', message);
			ws.send('Received message: '+ message);
		});
		ws.send('Connection to websocket created successfully');
});

app.use("/getName", async (req, res) =>{
	try {
	    const name = await db.any('SELECT * FROM test WHERE age = $1', 21);
	    console.log(name);
			webSocket.send(name[0].name);
			return res.send(name);
			//return name;
	}
	catch(e) {
		 console.log('Error: '+e);
	}

});

app.use("/helloworld", function(req, res){
	res.send("Hello World!!");
});

middleware(app, {
	outputPath: path.resolve(process.cwd(), 'dist'),
	publicPath: '/'
});


app.listen(3000, ()=>{
	console.log('application recieving request on port 3000');
});
