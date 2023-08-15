import mongoose from "mongoose";

let isConnected = false;

export const dbConnect = async () =>{
    mongoose.set('strictQuery', true)
    if(isConnected){
        console.log("MongoDB Connected")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'cemd',
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        isConnected = true;
        console.log("Connected to MongoDB")
        
    } catch (error) {
        console.log(error)
    }
}