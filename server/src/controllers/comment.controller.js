import Message from '../commons/message.js';
import RES from '../commons/status.js';
import CommentService from '../services/comment.service.js';

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
    await CommentService.createComment(cmt)
        .then(() => {
            RES.created(res, cmt, Message.create);
        })
        .catch((error) => {
            RES.internal(res, error, Message.unCreate);
        })
}

CommentController.getAllComments = async (req, res) => {
    try {
        const cmts = await CommentService.getAllComments();
        RES.success(res, cmts, Message.success);
    } catch (error) {
        RES.notFound(res, error, Message.notFound);
        // RES.notFound(res, error, Message.notFound);
    }
}

CommentController.deleteComment = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await CommentService.deleteComment(id);
        RES.success(res, result, Message.delete);
    } catch (error) {
        RES.notFound(res, error, Message.notFound);
    }
}

CommentController.getCommentById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await CommentService.getCommentById(id);
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

    await CommentService.updateComment(id, cmtUpdate)
        .then(() => {
            RES.updated(res, Message.update);
        })
        .catch((error) => {
            RES.internal(res, error, Message.unUpdate);
        })
}

CommentController.getCmtParent = async (req, res) => {
    try {
        const id = req.params.parentId;

        const result = await CommentService.getCmtByParent(id);
        RES.success(res, result, Message.success);
    } catch (error) {
        RES.notFound(res, error, Message.notFound);
    }
}

CommentController.getCmtHasChildren = async (req, res) => {
    try {

        const result = await CommentService.getCmtHasChildren();

        console.log(result)

        RES.success(res, result, Message.success);

    } catch (error) {
        RES.notFound(res, error, Message.notFound);
    }
}

CommentController.getCmtByPostId = async (req, res) => {
    try {

        const id = req.params.postId;

        const result = await CommentService.getCmtByPostId(id);

        RES.success(res, result, Message.success);

    } catch (error) {
        RES.notFound(res, error, Message.notFound);
    }
}


export default CommentController;