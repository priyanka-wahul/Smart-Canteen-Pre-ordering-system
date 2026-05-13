const express = require("express");
const router = express.Router();
const menuItem = require("../models/menuItem");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const {paymentSchema} = require("../schema");
const {isLoggedIn} = require("../middleware.js");

//place order middleware
const validatePayment = (req, res, next) => {
    const {error} = paymentSchema.validate(req.body);

    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg)
    }else{
        next();
    }
};

const cartController = require("../controllers/carts.js");

//cart route add
router.get("/add/:id",isLoggedIn, wrapAsync(cartController.addItemRoute));

//cart page
router.get("/", isLoggedIn,wrapAsync(cartController.cart));

// DELETE ITEM ROUTE
router.get("/delete/:id",isLoggedIn, wrapAsync(cartController.deleteItem));

//checkout route
router.post("/checkout",isLoggedIn,wrapAsync(cartController.itemCheckout));

//place order 
router.post("/place-order",validatePayment,wrapAsync(cartController.placeOrder));

module.exports = router;