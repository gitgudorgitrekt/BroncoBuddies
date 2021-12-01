import express from 'express';

import { tags } from '../controllers/tags.js'
import { profile } from '../controllers/profile.js'
const router = express.Router();

router.post('/tags', tags);
router.post('/profile', profile);
export default router;
