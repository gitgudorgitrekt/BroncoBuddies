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
	gender:{
		type: String
	},
	transfer:{
		type: Boolean
	},
	year:{
		type: Number
	},
	tags:{
		type: [String]
	},
	password:{
		type: String,
		required: true
	},
	discord:{
		type: String,
		max: 37
	},
	aboutme:{
		type: String,
		max: 420
	}
}, {collection: 'users'})

const User = mongoose.model('User', userSchema);

export default User;
