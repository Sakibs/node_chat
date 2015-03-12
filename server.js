var port 				= 8000,
 	express 			= require('express'),
 	app			 		= express(),
 	bodyParser 			= require('body-parser'),
	mongoose			= require('mongoose'),
	http 				= require('http').Server(app),
	io 					= require('socket.io')(http);

mongoose.connect('mongodb://localhost:27017/chat');

app.use(bodyParser());

// set root directory to client. Doing this automatically defaults to the index
// commenting out the following line redirects index to the route file
//app.use(express.static(__dirname+'/client'));

// handle route logic
require('./route')(app);
// import io code
require('./iocode')(io);


http.listen(port, function(){
  console.log('listening...');
});
