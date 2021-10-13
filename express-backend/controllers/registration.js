import User from '../models/user.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
	console.log(req.body);

	const { username, password } = req.body;

	console.log(await bcrypt.hash(password, 15));

	res.json({ status: 'ok' })
}