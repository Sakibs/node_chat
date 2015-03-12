var Page = require('./server/models/user');


module.exports = function(app) {

	// app.get(path, callback [, callback ...])
	// Routes HTTP GET requests to the specified path with the specified callback functions
	app.get('/',function(req,res) {
		console.log("requested index");
		res.sendFile(__dirname + '/client/index.html');
	});

	app.get('/room',function(req,res) {
		console.log("requested room");
		//console.log(req.query.username);
		//console.log(__dirname);
		res.body.username = req.query.username;
		res.sendFile(__dirname + '/client/chatroom.html');
	});

	app.post('/signin', function(req, res) {
		console.log(req.body.username);

		url = '/room?username='+req.body.username;
		res.redirect(url);
	});
}
