import User from '../models/user.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
	console.log(req.body);

	const { username, password: plainTextPassword } = req.body;

	if (!username || typeof username != 'string') {
		return res.json({ status: 'not acceptable'})
	}

	if (!plainTextPassword || typeof plainTextPassword != 'string') {
		return res.json({ status: 'not acceptable'})
	}

	console.log(await bcrypt.hash(plainTextPassword, 15));

	try{
		const response await User.create({
			username,
			password
		})
		console.log('User created:', response);
	} catch(error) {
		if (error.code == 11000) {
			return res.json({ status: 'not acceptable'})
		}
		throw error;
	}

	res.json({ status: 'ok' })
}