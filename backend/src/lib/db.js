import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://santoshsaroj0032:dTlE2ZNxnWhQPALr@cluster0.mkmko1i.mongodb.net/CHAT-WEB");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
