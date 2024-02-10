"use server";
import { connect } from "@/lib/db/mongodb";
import Category from "@/lib/models/Category_Modal";
import Product, { IProduct } from "@/lib/models/Product_Modal";
import User from "@/lib/models/User_Modal";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export const getProducts = async () => {
  try {
    await connect();
    const products = await Product.find();
    return JSON.stringify(products) as any;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const addProductDB = async (product: any): Promise<IProduct | null> => {
  try {
    await connect();

    const session = await getServerSession();

    const user = await User.findOne({ email: session?.user?.email });

    const category = await Category.findById(product.category);

    const productDetails: IProduct = {
      title: product.title,
      price: product.price,
      images: product.images,
      description: product.description,
      category: category?._id,
      tags: product.tags,
      createdBy: user._id,
    };

    const newProduct = new Product(productDetails);
    await newProduct.save();
    console.log("Product saved successfully:", newProduct);

    return JSON.stringify(newProduct) as any;
  } catch (e) {
    console.error("Error in addProductDB:", e);
    return null;
  }
};
