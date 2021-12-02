import express from 'express';
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import bcrypt from 'bcrypt';
import auth from './routes/auth.js'
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js'


dotenv.config();
const app = express();

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors({origin:["https://broncobuddiescpp.netlify.app","http://localhost:3000"], credentials: true}));
app.use(cookieParser('pazzw0rd$'));
app.use('/auth', auth);

app.use('/posts', postRoutes);
app.use('/user', userRoutes);
const CONNECTION_URL = process.env.REACT_APP_CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(error.message));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../my-app/build')))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/../my-app/build/index.html'))
  })

export default app;
