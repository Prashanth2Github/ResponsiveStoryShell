import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "storyapp",
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};
