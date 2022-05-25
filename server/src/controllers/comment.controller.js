import Message from '../commons/message.js';
import CommentRepo from '../repositories/comment.repository.js';

const CommentController = {};

CommentController.createComment = async (req, res) => {
    const cmt = {
        userId: req.body.userId,
        postId: req.body.postId,
        parentId: req.body.parentId,
        comment: req.body.comment,
        publish: req.body.publish,
        createAt: Date.now(),
    }
    await CommentRepo.createComment(cmt)
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

CommentController.getAllComments = async (req, res) => {
    try {
        const cmts = await CommentRepo.getAllComments;
        res.status(200).json({
            success: true,
            Comments: cmts
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

CommentController.deleteComment = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await CommentRepo.deleteComment(id);
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

CommentController.getCommentById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await CommentRepo.getCommentById(id);
        res.status(200).json({
            success: true,
            Comment: result
        })
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}

CommentController.updateComment = async (req, res) => {
    const cmtUpdate = {
        userId: req.body.userId,
        postId: req.body.postId,
        parentId: req.body.parentId,
        comment: req.body.comment,
        publish: req.body.publish,
        updateAt: Date.now(),
    }

    const id = req.params.id;

    await CommentRepo.updateComment(id, cmtUpdate)
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


export default CommentController;