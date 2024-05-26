import User from "../models/user.model.js"

export async function getProfilePage(req, res){

    const user = await User.findById({_id: req.session.user.id}).exec();    
    console.log(user);

    res.render("profile", {
        layout: "./layouts/main.ejs",
        user,
        update: req.flash(),
        card: user.card ? {
            number: user.card.number,
            expiry: user.card.expiry,
            cvv: user.card.cvv,
        } : {}
    })
}

export async function updateProfile(req, res){
    const form = req.body;
    await User.findByIdAndUpdate(req.session.user.id, {
        firstName: form.firstName,
        lastName: form.lastName,
        address: form.address,
        phone: form.phone,
    })

    req.flash("success", true)
    res.redirect("/user/profile")
}

export async function updatePayment(req, res){
    const form = req.body;
    const user = await User.findById(req.session.user.id).exec();
    console.log(form)

    user.card = form;
    user.save();
    req.flash("success", true);
    res.redirect('/user/profile');
}