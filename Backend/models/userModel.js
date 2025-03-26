import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true,
    },
    person: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    timing: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
});

export default mongoose.model("User", userSchema); 

