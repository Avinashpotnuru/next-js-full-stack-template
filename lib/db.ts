import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI Missing");
}

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export async function connectDB() {
  try {
    if (connection.isConnected) {
      return;
    }

    const db = await mongoose.connect(MONGODB_URI);

    connection.isConnected = db.connections[0].readyState;

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error);
    process.exit(1);
  }
}
