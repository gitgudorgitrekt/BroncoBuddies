import express from 'express';

import { tags } from '../controllers/tags.js'

const router = express.Router();

router.post('/', tags);

export default router;
