import express from 'express';
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import auth from './routes/auth.js'
import postRoutes from './routes/posts.js';
import tagsRoute from './routes/tags.js';
import buddyFilterRoutes from './routes/BuddyFilter.js';

dotenv.config();
const app = express();

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));

// app.use(cors({origin:'https://broncobuddiescpp.netlify.app'}));

// Local instance url
const localURL = 'http://localhost:3000';

app.use(cors({credentials: true, origin: localURL}));

app.use(cookieParser('pazzw0rd$'));

app.use('/auth', auth);
app.use('/posts', postRoutes);
app.use('/buddyfilter', buddyFilterRoutes);
app.use('/tags', tagsRoute);

const CONNECTION_URL = process.env.REACT_APP_CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(`${error} did not connect`));

export default app;
