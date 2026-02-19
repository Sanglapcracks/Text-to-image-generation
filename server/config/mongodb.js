import mongoose from "mongoose"
mongoose.connection.on('connected',()=>{
    console.log("Database connected")
})
const connectDB=async()=>{
    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`)
}
export default connectDB