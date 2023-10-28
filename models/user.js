// models/user
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
      minLength: 1,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      index: true,
      lowercase: true,
      unique: true,
      trim: true,
      minLength: 5,
      maxLength: 50,
    },
    password: String,
    role: {
      type: String,
      default: "user",
    },
    image: String,
    resetCode: {
      data: String,
      expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 10 * 60 * 1000), // 10minutes in milliseconds
      },
    },
  },
  { timestamps: true }
);
userSchema.plugin(uniqueValidator);
export default mongoose.models.User || mongoose.model("User", userSchema);
