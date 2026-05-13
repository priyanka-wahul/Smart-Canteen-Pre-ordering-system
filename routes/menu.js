const express = require("express");
const router = express.Router();
const menuItem = require("../models/menuItem");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const menuItemControllers = require("../controllers/menus.js");

//sara ka sara data return hoke aa raha hai kya ye check kar rahe hai
//and iske baad data ko pass karna hai to ejs template/file
//index route 
router.get("/",wrapAsync(menuItemControllers.index));


//create route
router.get("/category",wrapAsync(menuItemControllers.createCategory));

//create route
router.get("/category/:category", wrapAsync(menuItemControllers.findCategorybyId));

//SHOW ROUTE
router.get("/:id" , wrapAsync(menuItemControllers.showRoute));

module.exports = router;
