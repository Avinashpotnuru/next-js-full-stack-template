import mongoose, { Schema } from "mongoose";
export interface IRole {
  _id?: string;
  name: string;
  role: "user" | "admin" | "manager";
  createdAt?: Date;
  updatedAt?: Date;
}

const rolesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "manager"],
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "roles",
  },
);

const Role =
  mongoose.models.Role || mongoose.model("Role", rolesSchema, "roles");

export default Role;
