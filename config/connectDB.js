//la connection between bd and the server using mongoose
const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect(process.env.db);
    console.log(" data baase connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;
