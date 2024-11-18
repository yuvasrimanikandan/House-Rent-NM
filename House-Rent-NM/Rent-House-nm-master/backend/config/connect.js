const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/rent', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    throw new Error(`Could not connect to MongoDB: ${err}`);
  }
};

module.exports = connectToDB;
