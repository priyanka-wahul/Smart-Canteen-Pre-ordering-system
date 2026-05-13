module.exports.isLoggedIn = (req,res,next) =>{
    if(!req.isAuthenticated()){
        req.flash("error","You must logged in First, If You are new user then signUp");
        return res.redirect("/login");
    }
    next();

};
