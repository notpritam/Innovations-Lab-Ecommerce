import mongoose from "mongoose";

import { Schema } from "mongoose";

const orderSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, default: 1 },
  orderBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: {
    type: String,
    enum: ["pending", "processing", "success", "failed"],
    default: "pending",
  },
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
