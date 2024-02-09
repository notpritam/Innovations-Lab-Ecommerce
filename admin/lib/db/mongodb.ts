import mongoose from "mongoose";
import User from "../models/User_Modal";
import Category from "../models/Category_Modal";

//mine ui imports

let isConnected = false;

export const connect = async () => {
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
    const db = await connect();
    const user = await User.findOne({ email });

    // console.log("User", user);

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

export const authorize = async (email: string) => {
  console.log("Authorize", email);
  try {
    if (!isConnected) {
      await connect();
    } else {
      console.log("Already connected to MongoDB");
    }
    const user = await User.findOne({
      email,
    });
    return { _id: user._id, email: user.email };
  } catch (e) {
    console.log(e);
    return null;
  }
};

interface Category {
  name: string;
  description: string;
  image: string;
}

export const addCategoryDB = async (category: any) => {
  try {
    if (!isConnected) {
      await connect();
    } else {
      console.log("Already connected to MongoDB");
    }
    const newCategory = new Category(category);
    const categoryData = await newCategory.save();
    return categoryData;
  } catch (e) {
    console.log(e);
    return null;
  }
};
