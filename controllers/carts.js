const menuItem = require("../models/menuItem");

//cart route add
module.exports.addItemRoute = async(req,res) => {
    // find clicked item
    const menu = await menuItem.findById(req.params.id);

    req.flash("success","item addedd in your cart");

    // item not found
    if(!menu){
        throw new ExpressError(404,"Menu Item Not Found");
    }
    // create cart if not exists
        if(!req.session.cart){
            req.session.cart = [];
        }
        
        // add item to cart
        req.session.cart.push(menu);
        console.log(req.session.cart);
    
        const redirectUrl = req.get("Referrer") || "/menu";
        res.redirect(redirectUrl);
        
        // stay on same page
        // res.redirect("/menu");
    
}

module.exports.cart = async(req,res) => {
    const cart = req.session.cart || [];
    res.render("menus/cart.ejs", {cart});

}

module.exports.deleteItem = async(req,res) => {
    // current cart
    let cart = req.session.cart || [];

    // find deleted item
    const deletedItem = cart.find(menu =>
        menu._id.toString() === req.params.id
    );
    console.log("Deleted Item:");
    console.log(deletedItem);

    // remove item
    cart = cart.filter(menu =>
        menu._id.toString() !== req.params.id
    );
    // update cart
    req.session.cart = cart;

    req.flash("error","Item Removed From Cart");
    // go back to cart page
    res.redirect("/cart");

}

module.exports.itemCheckout = async(req,res) => {
    const cart = req.session.cart || [];
    res.render("menus/checkout.ejs",{cart});

}

module.exports.placeOrder = async(req,res) => {
    const cart = req.session.cart || [];
    console.log("Payment Method:");
    console.log(req.body.payment);

    req.flash("success","Order Placed Successfully! Will be Delivered in 10 min");

    // clear cart after order
    req.session.cart = [];

    res.redirect("/menu");
    // res.send("Order Placed Successfully");

}