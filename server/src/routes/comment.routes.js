import express from 'express';
import CommentController from '../controllers/comment.controller.js';

const commentRouter = express.Router();

commentRouter.get('/comment/children/:parentId', CommentController.getCmtChildren); 

commentRouter.post('/comment/new', CommentController.createComment);

commentRouter.delete('/comment/:id', CommentController.deleteComment);

commentRouter.get('/comment/:id', CommentController.getCommentById);

commentRouter.put('/comment/:id', CommentController.updateComment);

commentRouter.get('/comment', CommentController.getAllComments);


export default commentRouter;
