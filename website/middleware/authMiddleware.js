module.exports = {
    isAuthenticated: function(req,res,next) {
        console.log('isAuthenticated middleware called');
        if(req.user) {//itt a req.user az az adatbázisből lekért rekord
          console.log('User is authenticated');
           return next();}
        else {
          console.log('User is not authenticated');
          return res.redirect('/login')
          //res.status(401).json({error: 'User not authenticated'})
        }
    },
    isAdmin: function(req, res, next) {
      if(req.user.isadmin === 1 && req.user){
        return next()
      }
      else 
        return res.redirect('/login')
    }
}