export function getHomePage(req, res){
    res.render('home',{
        layout: "./layouts/main.ejs",
        user: req.session.user 
    })
}