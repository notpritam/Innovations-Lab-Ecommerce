import mongoose from "mongoose";

let cachedConnection: mongoose.Connection | null = null;

const connectDB = async () => {
  if (cachedConnection) {
    console.log("🚀 Using cached connection");
    return cachedConnection;
  }

  try {
    const connection = await mongoose.connect(process.env.MONGO_URI!);
    console.log("✅ New connection established");
    cachedConnection = connection.connection; // Save the connection to the cache
    return cachedConnection;
  } catch (error) {
    console.error("❌ Connection to database failed");
    throw error;
  }
};

export default connectDB;
