import express from 'express';

<<<<<<< HEAD
import { getPosts, createPost, updatePost } from '../controllers/posts.js'
=======
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
>>>>>>> e7d93eb481be06ad97b8effc2743be5fa2e7cef3

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
<<<<<<< HEAD
=======
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
>>>>>>> e7d93eb481be06ad97b8effc2743be5fa2e7cef3

export default router;