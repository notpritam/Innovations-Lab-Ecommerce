import mongoose, { Schema } from "mongoose";

// enum UserRole {
//   Admin = "admin",
//   User = "user",
// }

export interface IUser extends Document {
  name: string;
  email: string;
  // password: string;
  image: string;
  role: string;
  address: string;
  phone: string;
}

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    // password: { type: String, required: true },
    image: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
      required: true,
    },
    phone: { type: String, default: "+91 - " },
    address: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
