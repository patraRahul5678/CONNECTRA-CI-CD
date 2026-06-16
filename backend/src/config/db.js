import mongoose from "mongoose";

//Connection of MongoDB
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected")
    } catch (error) {
        console.log("Error in DB connection", error)
        process.exit(1)
    }
}