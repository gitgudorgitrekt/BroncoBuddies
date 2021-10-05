import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'

dotenv.config();

import postRoutes from './routes/posts.js';

const app = express();


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../my-app/build')))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/../my-app/build/index.html'))
  })

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
	res.send('Welcome to BroncoBuddies API');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(error.message));