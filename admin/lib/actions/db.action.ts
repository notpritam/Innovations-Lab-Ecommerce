"use server";
import mongoose from "mongoose";
import { connect } from "../db/mongodb";
import User from "../models/User_Modal";
import Category, { ICategory } from "../models/Category_Modal";
import { ICategoryResponse } from "@/components/Shared/CategoryList";

export const checkUserDB = async (email: string) => {
  try {
    await connect();
    const user = await User.findOne({ email });

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

export const authorizeDB = async (email: string) => {
  console.log("Authorize", email);
  try {
    await connect();

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

export const addCategoryDB = async (category: ICategory) => {
  try {
    await connect();
    const newCategory = new Category(category);
    const categoryData = await newCategory.save();
    console.log("Category Added", categoryData);
    return categoryData;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getCategoriesDB = async (): Promise<
  ICategoryResponse[] | null
> => {
  try {
    await connect();
    const categories = await Category.find();
    console.log("Categories", categories);

    const data = categories.map((category) => {
      return {
        _id: category._id.toString(),
        name: category.name,
        description: category.description,
        image: category.image,
      };
    });
    return data as ICategoryResponse[];
  } catch (e) {
    console.log(e);
    return null;
  }
};
