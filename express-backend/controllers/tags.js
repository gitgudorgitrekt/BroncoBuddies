import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import User from '../models/user.js';

export const tags = async (req, res) => {
  let { gender, transfer, year, tags } = req.body;
  let userID = req.signedCookies.session;
  let user = await User.findOne({_id:userID});
  user.gender = gender;
  user.transfer = transfer;
  user.year = year;
  user.tags = tags;
  await user.save();
  return res.json({ success: true });
}
 