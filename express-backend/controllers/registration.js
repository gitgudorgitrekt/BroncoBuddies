import User from '../models/user.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
	const { firstname, lastname, username, password, email } = req.body;

	if (!username || typeof username != 'string') {
		return res.json({ status: 'not acceptable'})
	}

	if (!password || typeof password != 'string') {
		return res.json({ status: 'not acceptable'})
	}

	let hashedPassword = await bcrypt.hash(password, 15);

	try {
		const user = await User.create({
			firstname,
			lastname,
			username,
			email,
			password: hashedPassword
		});
		res.cookie('session', user._id, { signed: true, sameSite:'none' });
		console.log('User created:', user);
	} catch (error) {
		console.log(error);
		return res.json({ status: 'database error' });
	}

	res.json({ status: 'ok' })
}
