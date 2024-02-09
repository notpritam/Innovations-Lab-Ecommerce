import mongoose from "mongoose";
import { Schema } from "mongoose";
export interface ICategory {
  name: string;
  description: string;
  image: string;
}

const categorySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Category =
  mongoose.models.Category ||
  mongoose.model<ICategory>("Category", categorySchema);

export default Category;
