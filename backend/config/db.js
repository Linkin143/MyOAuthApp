import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const DB_URL = process.env.DB_URL

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(DB_URL);
        console.log("DB is successfuly connect");
    } catch (error) {
        console.error(error.message);
       
    }
}

export default connectDB;