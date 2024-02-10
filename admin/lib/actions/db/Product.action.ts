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
    return products;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const addProductDB = async ({ product, email }: any) => {
  try {
    await connect();

    // const session = await getServerSession();

    const user = await User.findOne({ email: email });
    const category = await Category.findById(product.category);
    console.log(user, "this is user");

    console.log(category, "this is category");

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

    await newProduct.save().then((product: any) => {
      console.log("Product saved successfully:", product);
      return product;
    });
  } catch (e) {
    console.log(e, "this is error in addProductDB");
    return null;
  }
};
