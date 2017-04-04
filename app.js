var express = require("express");
var app = express();
var path =require("path");
var bodyParser = require("body-parser");

app.use(function(req, res, next){
	if(req.headers["x-forwarded-proto"] === "https"){		
		res.redirect("http://"+req.hostname+req.url);
	}else{		
		next();
	}
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({type:'*/*'}));

//auth dependencies
var PassportServicer = require('./auth/passport');
var passport = require('passport');
app.use(passport.initialize());

//github login routes
app.get('/auth/github', passport.authenticate('github', {scope:['email']}));
app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/signin' }),
    function(req, res) { 
    	var user = req.user;       	 	
        res.redirect('/?token='+user.token+'&username='+user.username+'&avatar_url='+user.avatar_url);     	
});

app.get('*', function (request, response){		
	response.sendFile(path.resolve(__dirname, './public', 'index.html'))
});

app.set("port", process.env.PORT||5000);

app.listen(app.get("port"), function(){
	console.log("Server started");
})