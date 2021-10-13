import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	username:{
		type: String,
		unique: true,
		trim: true,
		required: true,
		max: 32
	},
	password:{
		type: String,
		required: true
	},
}, {collection: 'users'})

const User = mongoose.model('User', userSchema);

export default User;
