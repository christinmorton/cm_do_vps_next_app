import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    // if already connected, return
    if(connected) {
        console.log('Mongodb is already connected...');
        return;
    }

    // Connect to MongoDB
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        connected = true;
        console.log('MongoDB connected...');
    } catch (error) {
        console.log('Error connecting to MongoDB: ', error);
    }
};


export default connectDB;