import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true,  // This makes email required for the subscription form
        unique: true,  // Ensures no duplicate emails are stored
        lowercase: true,  // Store emails in lowercase
    },
    subscribedAt: { 
        type: Date, 
        default: Date.now  // Adds a timestamp for when the email was added
    },
});

export default mongoose.model("Email", emailSchema);
