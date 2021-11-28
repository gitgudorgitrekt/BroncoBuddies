import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	firstname:{
		type: String,
		unique: true,
		trim: true,
		required: true,
		max: 64
	},
	lastname:{
		type: String,
		unique: true,
		trim: true,
		required: true,
		max: 64
	},
	email:{
		type: String,
		unique: true,
		trim: true,
		required: true,
		max: 64
	},
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
