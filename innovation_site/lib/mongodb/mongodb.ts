import mongoose from "mongoose";
import User from "@/lib/models/User_Model";

let isConnected = false; // Global private variable to store connection status
//Connect to Database

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URI) return console.log("MONGODB_URL not found");

  if (isConnected) return console.log("Already Connected!");

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
    isConnected = true;
  } catch (error) {}
};

// Create User Function

const createUser = async (user) => {
  if (!isConnected) {
    await connectDB();
  }
  console.log("Creating User", user);
  const email = user.email;
  const userExists = await User.findOne({ email });

  if (userExists) {
    console.log("User already exists");
    return false;
  }

  const newUser = {
    name: user.name,
    email: user.email,
    image: user.image,
  };

  const newUser = new User(newUser);
  newUser.save();
  return true;
};

export { connectDB, createUser };
