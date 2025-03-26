import express from 'express';
import Email from '../models/emailModel.js'; 

const router = express.Router();

// POST endpoint for email subscription
router.post('/', async (req, res) => {
    const { email } = req.body;

    console.log("Received email:", email); // Log the received email for debugging

    if (!email) {
        return res.status(400).json({ message: "Email is required for subscription" });
    }

    try {
        // Check if the email already exists in the database
        const existingEmail = await Email.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "Email is already subscribed" });
        }

        // Create and save a new email with `subscribedAt` field handled automatically
        const newEmail = new Email({ email });
        const savedEmail = await newEmail.save();

        console.log("Email saved successfully:", savedEmail); // Log the saved email for debugging

        res.status(201).json({ message: "Subscribed successfully!" });
    } catch (error) {
        console.error('Error saving email:', error); // Log any errors during saving
        res.status(500).json({ message: "An error occurred while processing your request" });
    }
});

export default router;
