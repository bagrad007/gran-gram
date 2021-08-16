import express from 'express';
import { getPosts, createPost, likePost, deletePost } from '../controllers/posts.js';


const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.get('/:id', deletePost)
router.patch('/:id/likePost', likePost)




export default router