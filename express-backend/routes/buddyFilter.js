import express from 'express';

import { getPostsBySearch, getPosts, deletePost, likePost } from '../controllers/posts.js'

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
