import mongoose from "mongoose"

const connectDB = async () => {
    mongoose.connect('mongodb://localhost:27017/').then(() => console.log('connected to MongoDB')).catch((error) => console.error(error))
}

export default connectDB