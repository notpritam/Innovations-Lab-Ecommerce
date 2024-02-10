"use server";
import mongoose from "mongoose";

//mine ui imports

let isConnected = false;

export const connect = async () => {
  console.log("Connect");
  try {
    if (isConnected) {
      console.log("Already connected to MongoDB");
      return;
    } else {
      const db = await mongoose.connect(process.env.MONGO_URI!);
      isConnected = true;
      console.log("Connected to MongoDB");
    }
  } catch (e) {
    console.log(e);
  }
};
