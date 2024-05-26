export function authenticateUser(req, res, next){
    if(!req.session.user){
       res.redirect('/auth/login')
       return; 
    }
    next();
}