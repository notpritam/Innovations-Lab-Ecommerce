import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface IProduct {
  title: string;
  price: number;
  slug: string;
  images: string[];
  description: string;
  category: mongoose.Schema.Types.ObjectId;
  tags: string[];
  createdBy: mongoose.Schema.Types.ObjectId;
}

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    slug: { type: String, required: true },
    images: { type: [String], required: true },
    description: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    tags: { type: [String], required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
