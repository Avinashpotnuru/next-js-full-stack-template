import mongoose, { Schema } from "mongoose";
import { IClient } from "@/types/client";

const clientSchema = new Schema<IClient>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "manager"],
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const Client =
  mongoose.models.Client || mongoose.model<IClient>("Client", clientSchema, "clients");

export default Client;
