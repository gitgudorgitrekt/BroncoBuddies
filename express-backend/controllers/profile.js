import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import User from '../models/user.js';

export const profile = async (req, res) => {
    let { firstname, lastname, discord, aboutme } = req.body;
    let userID = req.signedCookies.session;
    let user = await User.findOne({_id:userID});
    user.firstname = firstname;
    user.lastname = lastname;
    user.discord = discord;
    user.aboutme = aboutme;
    await user.save();
    return res.json({ success: true });
  }