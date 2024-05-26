import Product from "../models/product.model.js";

export async function getCartPage(req, res){

    const itemsList = req.session.cart || [];
    let products = [];

    if(itemsList.length > 0){
        for(const item of itemsList){
            products.push({ 
                product: await Product.findById(item.id).exec(),
                quantity: item.quantity,
            })
        }
    }

    res.render('cart', {
        layout: "./layouts/main.ejs",
        products,
        user: req.session.user
    })
}