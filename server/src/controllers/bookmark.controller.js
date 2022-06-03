import Message from '../commons/message.js';
import RES from '../commons/status.js';
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
            RES.created(res, bookmark, Message.create);
        })
        .catch((error) => {
            RES.internal(res, error, Message.unCreate)
        })
}

BookmarkController.getAllBookmarks = async (req, res) => {
    try {
        const bookmarks = await BookmarkRepo.getAllBookmarks();

        RES.success(res, bookmarks, Message.success);
    } catch (error) {
        RES.notFound(res, error, Message.notFound);
    }
}

BookmarkController.deleteBookmark = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await BookmarkRepo.deleteBookmark(id);

        RES.success(res, result, Message.delete);
    } catch (error) {
        RES.notFound(res, error, Message.notFound);
    }
}

BookmarkController.getBookmarkById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await BookmarkRepo.getBookmarkById(id);

        RES.success(res, result, Message.success)
    } catch (error) {
        RES.notFound(res, error, Message.notFound);
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
            RES.updated(res, Message.update)
        })
        .catch((error) => {
            RES.internal(res, error, Message.unUpdate);
        })
}


export default BookmarkController;