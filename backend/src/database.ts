import mongoose from 'mongoose';

const MONGO_URL = "mongodb+srv://griffinesonyango:Qd5jDBg1f5AI5TNo@cluster0.njwyc5e.mongodb.net/";

export async function connect() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Successfully connected to MongoDB using Mongoose");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
