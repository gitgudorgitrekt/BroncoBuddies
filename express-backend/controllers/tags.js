import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import User from '../models/user.js';

export const login = async (req, res) => {
  let { username, password } = req.body;

  let user = await User.findOne({username});
  let result = await bcrypt.compare(password, user.password);

  res.cookie('session', user._id, { signed: true });

  return res.json({ success: result });
}
