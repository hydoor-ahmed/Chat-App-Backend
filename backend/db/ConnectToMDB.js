import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("\t\t[Connected] Connected to MongoDB.!");
  } catch (error) {
    console.log("\t\t[ERROR] Error connecting to MongoDB.!\n", error.message);
  }
};

export default connectToMongoDB;
