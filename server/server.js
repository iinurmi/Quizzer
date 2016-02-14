var express = require("express");
var app = express();
var mongoose = require("./db.js");
var bodyParser = require("body-parser");
// List all APIs here
var api1 = require("./api/api_v1.js");

// Parse application/json
// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Parse form requests
app.use(bodyParser.urlencoded({ extended: false }));

// CORS Support
// Enables CORS
var enableCORS = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    };
};

app.use(enableCORS);


app.use("/api_v1", function (req, res, next) {
	next();
});
/*
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var appSession = session({
	secret: "740345c40b1cb8fe632a1e7273fb5eea",
	name: "achv_sid",
	resave: false,
	saveUninitialized: true,
	store: new MongoStore({
		url: process.env.MONGODB_URL +":"+ process.env.MONGODB_PORT+"/achievement_ses",
		ttl: 1 * 24 * 60 * 60, // 1 day
		mongooseConnection: mongoose.connection
	})
});
var passportInitialize = passport.initialize();
var passportSession = passport.session();

// Setup passport. 
/*
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
*/
// Login / registration
/*
app.post("/register", function(req, res) {
	// Check that passwords match
	if(!req.body.password || req.body.password.length < 6 || req.body.password != req.body.password2){
		res.status(400).send({"error":"Passwords don't match or password is too short."});
		return;
	}

	// password2 is the password check field and is not on the model
	delete req.body.password2;

    User.register(new User({ username : req.body.username }), req.body.password, function(error, user){
		if(error){
			console.log(error);
			res.status(400).send(error);
			return;
		}
		res.send({"id": user._id});
    });
});
*/
// Login,with username and password
/*
app.use("/login", appSession, passportInitialize, passportSession);
app.post("/login", passport.authenticate("local"), function(req, res) {
    console.log(req.user);
    if(req.isAuthenticated()) {
    	res.send({"id": req.user._id});
    } else {
    	res.status(400).send();
    }
});

// Login using facebook
// Check: https://www.npmjs.com/package/passport-facebook
app.post("/login/facebook", passport.authenticate("facebook"), function(req, res) {
    if(req.isAuthenticated()) {
    	res.send();
    } else {
    	res.status(400).send();
    }
});

// Logout
app.use("/logout", appSession, passportInitialize, passportSession);
app.post("/logout", appSession, function(req, res) {
    req.logout();
    res.send();
});

// Set all APIs
// Force session and user to be logged in to use the api
app.use("/api_v1", appSession, passportInitialize, passportSession);
app.use("/api_v1", function (req, res, next) {
	if(!req.isAuthenticated()){
		res.status(401).send({"error":"not authenticated"});
		return;
	}
	next();
});
*/
app.use("/api_v1", api1);
//app.use("/v2/", api2);
//etc.
app.use("/bower_components", express.static(__dirname + "/../bower_components"));
app.use("/", express.static(__dirname + "/../app"));

var server = app.listen(3000, function() {

});