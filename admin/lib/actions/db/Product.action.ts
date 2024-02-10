import { connect } from "@/lib/db/mongodb";
import Product from "@/lib/models/Product_Modal";
import mongoose from "mongoose";

const getProducts = async () => {
  try {
    await connect();
    const products = await Product.find();
    return products;
  } catch (e) {
    console.log(e);
    return null;
  }
};
