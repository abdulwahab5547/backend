import mongoose from "mongoose"
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MONGODB Connected - DB Host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Database connection error: ", erorr);
        process.exit(1)
    }
}

export default connectDB