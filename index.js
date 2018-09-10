import express from 'express';
import path from 'path';
//import webpackConfig from 'webpack.config.babel.js';
import webpacDevMiddleware from 'webpack-dev-middleware';
import middleware from './middleware';

const app = express();

app.use('/helloworld', function(req, res){
	res.send("Hello World!!");
});

middleware(app, {
	outputPath: path.resolve(process.cwd(), 'dist'),
	publicPath: '/'
});

app.listen(3000, ()=>{
	console.log('application recieving request on port 3000');
});

