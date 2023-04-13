var express = require('express');
var router = express.Router();

router.post('/',(req, res, next)=>{
  res.render('table', { title: 'Table' });
  
  /*
  passport.authenticate('local',{
      successRedirect:'/report',
      failureRedirect:'/',
      failureFlash: true 
  })(req, res, next)
  */

})

module.exports = router;
