import Product from "../models/product.model.js"

export async function getShopPage(req, res){

    const filter = capitalize(req.params.filter);
    let products;

    if(filter=='All')
        products = await Product.find().exec();
    else
        products = await Product.find({category: filter}).exec();

    res.render("shop", {
        layout: "./layouts/main.ejs",
        user: req.session.user,
        products,
        filter,
    })
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}