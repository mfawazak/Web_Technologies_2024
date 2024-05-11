export function getLoginPage(req, res){
    res.render('login', {
        layout: "./layouts/auth.ejs"
    })
}