const mongoose = require('mongoose');
const dontenv = require('dotenv');
dontenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongo connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(err);
  }
 
};

module.exports = connectDB;
