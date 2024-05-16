import User from '../models/user.model.js'
import  bcrypt from 'bcrypt'

export async function signUp(req, res){
    const user = await User.findOne({email: req.email}).exec();
    if(user){
        res.status(409).json({
            field: "email",
            message: "user already exists!",
        }) 
        return
    }

    const password = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({...req.body, password});
    newUser.save();
    console.log("user successfully added!")
}

export async function login(req, res){
    const user = await User.findOne({email: req.body.email}).exec();
    if(!user){
        req.flash({"error": "Invalid Credentials"})
        res.redirect('/auth/login');
    }else{
        const match = await bcrypt.compare(req.body.password, user.password)
        if(match){
            req.session.user = { name: "aashir" }
            res.redirect("/")
        }else{
            req.flash("error", "Invalid Credentials")
            res.redirect("/auth/login")
        }
    }
}