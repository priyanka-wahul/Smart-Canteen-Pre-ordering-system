const menuItem = require("../models/menuItem");


module.exports.index= async(req,res) =>{
    const allMenu = await menuItem.find({});
    res.render("menus/index.ejs", {allMenu});
}

module.exports.createCategory=async(req,res) => {
    res.render("menus/category.ejs");
}

module.exports.findCategorybyId = async(req,res) => {
    const category = req.params.category;
    const filteredMenu = await menuItem.find({
        category: category
    });
    if(filteredMenu.length === 0){
        throw new ExpressError(404, "Category Not Found");
    }
    res.render("menus/category.ejs", {
        filteredMenu,
        category
    });

}

module.exports.showRoute = async(req,res) => {
    let {id} = req.params;
    const menu = await menuItem.findById(id);
    if(!menu){
        throw new ExpressError(404, "Menu Item Not Found");
    }
    res.render("menus/show.ejs", {menu});
}