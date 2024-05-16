export function getLoginPage(req, res){
    res.render('login', {
        layout: "./layouts/auth.ejs",
        message: req.flash()
    })
}

export function getSignUpPage(req, res){
    res.render('signup', {
        layout: "./layouts/auth.ejs",
    })
}