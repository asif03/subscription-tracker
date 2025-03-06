import mongoose from "mongoose";
import { NODE_ENV, DB_URI } from "./env.js";

if (!DB_URI) {
  throw new Error(
    "Please define the DB_URI environment variable inside .env.<development/production>.local file"
  );
}

const connectToDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Database connected in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Error connecting database: ", error);
    process.exit(1);
  }
};

export default connectToDB;
