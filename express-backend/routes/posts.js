import express from 'express';
import cors from 'cors';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
const router = express.Router();
router.use(cors(corsOptions));
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;