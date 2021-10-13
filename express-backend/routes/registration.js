import express from 'express';

import { register } from '../controllers/registration.js'

const router = express.router();

router.post('/', register);

export default router;