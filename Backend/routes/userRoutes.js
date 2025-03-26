import express from 'express';
import User from '../models/userModel.js';
const router = express.Router();


router.post('/',async(req, res)=>{
    const {name, phone_number, person, date, timing, message} = req.body;
    try {
        const newUser = new User({name, phone_number, person, date, timing, message});
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
export default router;
