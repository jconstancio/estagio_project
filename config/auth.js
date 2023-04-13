const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const Users = require('../models/User');
 
module.exports = function(passport){ 
    passport.use(new localStrategy({usernameField: 'user',passwordField: 'password'},(user, password, done)=>{
      Users.findOne({where: {user: user}}).then((user) => {
            if(!user){
               return done(null, false, {message: 'Usuario não cadastrado'})
            }
            
            bcrypt.compare(password,user.password, (erro, checked)=>{
                if(checked){
                    return done(null, user)
                }else{
                    return done(null, false, {message: 'Senha incorreta'})                    
                }
            })
        })

    }))

    passport.serializeUser(function(user, cb) {
        process.nextTick(function() {
          cb(null, { id: user.id});
        });
      });
      
      passport.deserializeUser(function(user, cb) {
        process.nextTick(function() {
          return cb(null, user);
        });
      });

}    