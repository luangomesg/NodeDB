import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },

    email: {
        type: String,
        required: true 
    },

    password: {
        type: String,
        required: true 
    },

    age: {
        type: Number,
        required: true 
    },

    createdate: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("User", userSchema);