module.exports = {
    isAuthenticated: function(req,res,next) {
        if(req.user) {//itt a req.user az az adatbázisből lekért rekord
           return next();}
        else {
          return res.redirect('/login')
          //res.status(401).json({error: 'User not authenticated'})
        }
    },
    isAdmin: function(req, res, next) {
      if(req.user.isAdmin == true && req.user){
        return next()
      }
      else 
        return res.status(401).json({message: "Not authorized!"})
    }
}