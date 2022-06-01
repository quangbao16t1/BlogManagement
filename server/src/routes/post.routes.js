import express from 'express';
import PostController from '../controllers/post.controller.js';

const postRouter = express.Router();

postRouter.get('/post/search', PostController.searchPost);
postRouter.post('/post/new', PostController.createPost);
postRouter.delete('/post/:id', PostController.deletePost);
postRouter.get('/post/:id', PostController.getPostById);
postRouter.put('/post/:id', PostController.updatePost);
postRouter.get('/post', PostController.getAllPosts);
// postRouter.get('/post', PostController.getAllPosts);

export default postRouter;
