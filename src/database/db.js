import mongoose from "mongoose";

async function connectDataBase() {
    mongoose.set("strictQuery", false)
    await mongoose.connect("mongodb+srv://Luan:jJqMOiMJvnFbEAco@cluster0.hcj4kiv.mongodb.net/?retryWrites=true&w=majority")
}

export default connectDataBase;


