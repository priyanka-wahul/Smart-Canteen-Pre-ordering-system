if(process.env.NODE_ENV!="production"){
    require('dotenv').config();
}


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const menuItem = require("./models/menuItem.js");
// const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {paymentSchema} = require("./schema.js");
const menuRoutes = require("./routes/menu.js");
const cartRoutes = require("./routes/cart.js");
const userRoutes = require("./routes/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const {isLoggedIn} = require("./middleware.js");


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
// app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const session = require("express-session");
const flash = require("connect-flash");

const sessionOptions = {
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next ) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

//demo user
// app.get("/demouser", async(req,res) =>{
//     let fakeUser = new User({
//         email:"demo@gmail.com",
//         username:"demo",
//     });
//     let registeredUser = await User.register(fakeUser, "helloworld");
//     res.send(registeredUser);
// });

app.use("/menu", menuRoutes);
app.use("/cart",cartRoutes);
app.use("/",userRoutes);

const MONGO_URL = 'mongodb://127.0.0.1:27017/order';

main()
.then((res) => {
    console.log("connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/" , (req,res) => {
    res.send("root is working");
});


//this is for the testing menu is inserting on data 
// app.get("/menu",async(req,res) => {
//     let sampleMenu = new menuItem({
//         name:"samosa",
//         price:20,
//         category:"Snacks",
//         image:"https://images.unsplash.com/photo-1676700310660-e92d03e259c3?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     });
//     await sampleMenu.save();
//     console.log("working");
//     res.send("succesfull menu testing");
// });

//Invalid error handler

app.use((req,res,next) => {
    next(new ExpressError(404,"page not found"));
});

//error middleware
app.use((err,req,res,next) => {
    let {statusCode=500, message="something went wrong" } = err;
    res.status(statusCode).render("error.ejs",{message});
    // res.status(statusCode).message(message);
    // res.send("something went wrong");
}); 

app.listen(3030,() =>{
    console.log("server is listening to port 3030");
});

