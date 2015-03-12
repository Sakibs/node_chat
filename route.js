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
		//console.log(req.session.username);
		//res.locals.username = req.session.username;
		//res.body.username = req.session.username;
		//console.log(__dirname);
		//res.sendFile(__dirname + '/client/chatroom.html');
		res.render('chatroom', {
			username: req.session.username
		})
	});

	app.post('/signin', function(req, res) {
		console.log(req.body.username);

		url = '/room';
		req.session.username = req.body.username;
		res.redirect(url);
	});
}
