import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	name:{
		type: String,
		trim: true,
		required: true,
		max: 32
	},
	email:{
		type: String,
		trim: true,
		required: true,
		unique: true,
		lowercase: true
	},
	password:{
		type: String,
		required: true
	},
	resetLink:{
		data: String,
		default: ''
	}
}, {timestamps: true})

const User = mongoose.model('User', userSchema);

export default User;
