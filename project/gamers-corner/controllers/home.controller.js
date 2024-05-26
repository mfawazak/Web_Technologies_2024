import User from '../models/user.model.js'

export function getHomePage(req, res){
    res.render('home',{
        layout: "./layouts/main.ejs",
        user: req.session.user 
    })
}

export async function addToCart(req, res){

    const obj = {
        id: req.body.id,
        quantity: 1,
    }

    const cart = req.session.cart;

    if(cart){
        const index = cart.map(item => item.id).indexOf(req.body.id);
        if(index != -1){
            cart[index].quantity++;
            res.sendStatus(200)
            return;
        }
    }
    
    if(!req.session.user){
    }
    
    req.session.cart = req.session.cart ? [ ...req.session.cart, obj ] : [obj]
    res.sendStatus(200)
    
}

export function removeFromCart(req, res){

    let cart = req.session.cart
    req.session.cart = cart.filter(item => item.id != req.body.id)
    res.redirect('/cart')
}

export function logout(req, res){
    req.session.user = null;
    res.redirect('/')
}

export async function getCheckoutPage(req, res){
    let user;
    if(req.session.user)
        user = await User.findById(req.session.user.id).exec();

    let passUser = user ? {
            name: user.firstName,
            fName: user.firstName,
            lName: user.lastName,
            address: user.address,
            phone: user.phone,
        } : null

        console.log(passUser)

    res.render("checkout", {
        layout: './layouts/main.ejs',
        user: passUser,
        card: user && user.card ? {
            number: user.card.number,
            expiry: user.card.expiry,
            cvv: user.card.cvv,
        } : null
    })
}