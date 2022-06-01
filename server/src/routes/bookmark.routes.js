import express from 'express';
import BookmarkController from '../controllers/bookmark.controller.js';

const bookmarkRouter = express.Router();

bookmarkRouter.post('/bookmark/new', BookmarkController.createBookmark);

bookmarkRouter.delete('/bookmark/:id', BookmarkController.deleteBookmark);

bookmarkRouter.get('/bookmark/:id', BookmarkController.getBookmarkById);

bookmarkRouter.put('/bookmark/:id', BookmarkController.updateBookmark);

bookmarkRouter.get('/bookmark', BookmarkController.getAllBookmarks);


export default bookmarkRouter;
