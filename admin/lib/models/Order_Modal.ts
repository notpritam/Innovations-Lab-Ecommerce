import mongoose from "mongoose";

import { Schema } from "mongoose";

const orderItemSchema = new Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, default: 1 },
});

const orderSchema = new Schema({
  items: [orderItemSchema],
  orderBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: {
    type: String,
    enum: [
      "pending",
      "processing",
      "success",
      "cancelled",
      "failed",
      "delivered",
    ],
    default: "pending",
  },
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
