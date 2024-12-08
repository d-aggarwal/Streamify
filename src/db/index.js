import mongooses from "mongoose";
import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";



 const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        
    } catch (error) {
        console.error("Mongodb connection error",error)
        process.exit(1);
    }
}

export default connectDB