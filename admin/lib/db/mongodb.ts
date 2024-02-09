import mongoose from "mongoose";
import User from "../models/User_Modal";

//mine ui imports

let isConnected = false;

const connect = async () => {
  try {
    if (isConnected) {
      console.log("Already connected to MongoDB");
      return;
    } else {
      const db = await mongoose.connect(process.env.MONGO_URI!);
      isConnected = true;
      console.log("Connected to MongoDB");
    }
  } catch (e) {}
};

export const checkUser = async (email: string) => {
  try {
    if (!isConnected) {
      await connect();
    } else {
      console.log("Already connected to MongoDB");
    }
    const user = await User.findOne({ email });

    console.log("User", user);

    if (user) {
      if (user.role === "admin") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};
