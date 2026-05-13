const mongoose = require("mongoose");
const initData = require("./data.js");
const menuItem = require("../models/menuItem.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/order';

main()
.then((res) => {
    console.log("connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const initDB = async () =>{
    await menuItem.deleteMany({});
    await menuItem.insertMany(initData.data);
    console.log("data intialized");
}
initDB();
