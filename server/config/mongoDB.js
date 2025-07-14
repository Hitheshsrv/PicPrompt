import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const connectDB = async () => {
    /*
    mongoose.connection.openUri('connected', () => {
        console.log(`Database connected sucessfully`);
    })
    */
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URL}text2img`)
        console.log(`MongoDB connected: ${conn.connection.host}`);
        return conn
    } catch(error) {
        console.error(`Error: ${error}`);
    }
}

export default connectDB