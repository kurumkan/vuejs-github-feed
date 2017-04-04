var passport = require('passport');

//serializeUser and deserializeUser are required for social strategies(facebook, vk etc.)
passport.serializeUser(function(user, done) {        
    done(null, user.id)
});
passport.deserializeUser(function(id, done) {
    //code for deserialization should go here       
});

var GithubStrategy = require('passport-github2').Strategy;
passport.use(new GithubStrategy({
        clientID: 'ca6dd0cb788d47887cbb', 
        clientSecret: '1a4ad758615408b4d59ce43f4ade93a600d901cb', 
        callbackURL: "/auth/github/callback",
        profileFields: ['id', 'emails', 'profileUrl', 'displayName']        
    },function(accessToken, refreshToken, profile, done) {
        process.nextTick(function () {        	            
            var user = {
                id: profile.id,
                username: profile.username,
                avatar_url: profile._json.avatar_url,
                token: accessToken   
            }
            done(null, user);       	            
        });
    }
));

