import Message from '../commons/message.js';
import RES from '../commons/status.js';
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
            RES.created(res, cmt, Message.create);
        })
        .catch((error) => {
            RES.internal(res, error, Message.unCreate);
        })
}

CommentController.getAllComments = async (req, res) => {
    try {
        const cmts = await CommentRepo.getAllComments;
        RES.success(res, cmts, Message.success);
    } catch (error) {
        RES.notFound(res, error, Message.notFound);
    }
}

CommentController.deleteComment = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await CommentRepo.deleteComment(id);
        RES.success(res, result, Message.delete);
    } catch (error) {
        RES.notFound(res, error, Message.notFound);
    }
}

CommentController.getCommentById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await CommentRepo.getCommentById(id);
        RES.success(res, result, Message.success);
    } catch (error) {
        RES.notFound(res, error, Message.notFound);
    }
}

CommentController.updateComment = async (req, res) => {
    const cmtUpdate = {
        // userId: req.body.userId,
        // postId: req.body.postId,
        // parentId: req.body.parentId,
        comment: req.body.comment,
        publish: req.body.publish,
        updateAt: Date.now(),
    }

    const id = req.params.id;

    await CommentRepo.updateComment(id, cmtUpdate)
        .then(() => {
            RES.updated(res, Message.update);
        })
        .catch((error) => {
            RES.internal(res, error, Message.unUpdate);
        })
}

CommentController.getCmtChildren = async (req, res) => {
    try {
        const id = req.params.parentId;

        const result = await CommentRepo.getCmtChildren(id);
        RES.success(res, result, Message.success);
    } catch (error) {
        RES.notFound(res, error, Message.notFound);
    }
}


export default CommentController;