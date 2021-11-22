import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import bcrypt from 'bcrypt';
import registration from './routes/registration.js'
import postRoutes from './routes/posts.js';

dotenv.config();
const app = express();

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
//TODO change * later to allow specific clients to access our server
app.get('/cors', (req, res) => {
	res.set('Access-Control-Allow-Origin', 'https://broncobuddiescpp.netlify.app', 'http://localhost:3000/');
	res.header("Access-Control-Allow-Origin", 'https://broncobuddiescpp.netlify.app', 'http://localhost:3000/');
	res.send({ "msg": "This has CORS enabled 🎈" })
	})
app.use('/api/register', registration);

app.use('/posts', postRoutes);

const CONNECTION_URL = process.env.REACT_APP_CONNECTION_URL;
const PORT = process.env.REACT_APP_PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(error.message));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../my-app/build')))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/../my-app/build/index.html'))
  })

export default app;
