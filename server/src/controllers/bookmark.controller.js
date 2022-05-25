import Message from '../commons/message.js';
import BookmarkRepo from '../repositories/bookmark.repository.js';

const BookmarkController = {};

BookmarkController.createBookmark = async (req, res) => {
    const bookmark = {
        userId: req.body.userId,
        postId: req.body.postId,
        note: req.body.note,
        createAt: Date.now(),
    }
    await BookmarkRepo.createBookmark(bookmark)
        .then(() => {
            res.status(201).json({
                success: true,
                message: Message.create,
            })
        })
        .catch((error) => {
            res.status(500).json({
                message: Message.unCreate,
                error: error.message
            })
        })
}

BookmarkController.getAllBookmarks = async (req, res) => {
    try {
        const bookmarks = await BookmarkRepo.getAllBookmarks;
        res.status(200).json({
            success: true,
            Bookmarks: bookmarks
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

BookmarkController.deleteBookmark = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await BookmarkRepo.deleteBookmark(id);
        res.status(200).json({
            success: true,
            message: Message.delete,
        })
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}

BookmarkController.getBookmarkById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await BookmarkRepo.getBookmarkById(id);
        res.status(200).json({
            success: true,
            Bookmark: result
        })
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}

BookmarkController.updateBookmark = async (req, res) => {
    const bookmarkUpdate = {
        userId: req.body.userId,
        postId: req.body.postId,
        note: req.body.note,
        updateAt: Date.now(),
    }

    const id = req.params.id;

    await BookmarkRepo.updateBookmark(id, bookmarkUpdate)
        .then(() => {
            res.status(200).json({
                success: true,
                message: Message.update,
            })
        })
        .catch((error) => {
            res.status(500).json({
                message: Message.unUpdate,
                error: error.message
            })
        })
}


export default BookmarkController;