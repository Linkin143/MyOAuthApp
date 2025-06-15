import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/MyOAuthDB";

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(DB_URL);
        console.log("DB is successfuly connect");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message,
            success: false

        })
    }
}

export default connectDB;