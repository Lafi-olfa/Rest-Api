const express = require("express");
const connect = require("./config/connectDB");
const User = require("./model/User");
require("dotenv").config({ path: "./config/.env" });
const app = express();
app.use(express.json());

//connect to database
connect();
//Create CRUD:
//add

app.post("/add", async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const newPerson = new User({ name, email, phone });
    await newPerson.save();
    res.send("added");
    console.log("added with succes");
  } catch (error) {
    console.log(error);
  }
});
//Get
app.get("/get", async (req, res) => {
  try {
    const all = await User.find();
    res.send(all);
    console.log("geting users");
  } catch (error) {
    console.log(error);
  }
});
//getting a specific user
app.get("/get/:id", async (req, res) => {
  try {
    const all = await User.findById(req.params.id);
    res.send(all);
    console.log("geting users");
  } catch (error) {
    console.log(error);
  }
});
//getting user by id and update
app.put("/update/:id", async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true }
    );
    res.send(updated);
  } catch (error) {
    console.log(error);
  }
});

//delete
app.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    res.send("deleted");
  } catch (error) {
    console.log(error);
  }
});

//
PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  err ? console.log(error) : console.log(`server is running on port : ${PORT}`);
});

//create a server
