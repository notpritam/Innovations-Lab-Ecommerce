import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String], required: true },
  description: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  tags: { type: [String], required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
