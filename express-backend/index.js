import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import bcrypt from 'bcrypt';
import registration from './routes/register.js'
import postRoutes from './routes/posts.js';

dotenv.config();

const app = express();

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/api/register', registration);

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://mongodbaanu:3DPkJp1g9SZlAwH3@cluster0.dmveh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log('Server running on port: ${PORT}')))
	.catch((error) => console.log(error.message));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../my-app/build')))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/../my-app/build/index.html'))
  })


app.get('/', (req, res) => {
	res.send('Welcome to BroncoBuddies API');
});

const url = process.env.CONNECTION_URL;
