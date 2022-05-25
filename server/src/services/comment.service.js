import connectDB from "../models/index.js";

const CommentModel = connectDB.comments;

const CommentService = {};

CommentService.getAllComments = async () => {
    return await CommentModel.findAll({
        include: [{
            model: connectDB.users
        }, {
            model: connectDB.posts
        }]
    });
}

CommentService.getCommentById = async (id) => {
    return await CommentModel.findOne({
        where: { id: id },
        include: [{
            model: connectDB.users
        }, {
            model: connectDB.posts
        }]
    })
}

CommentService.updateCommnet = async (id, cmt) => {

    const commentUpdate = await CommentModel.findOne({ where: { id: id } });

    if (!commentUpdate) throw "Comment not found!!!";

    Object.assign(commentUpdate, cmt);

    await commentUpdate.save();
}

CommentService.deleteComment = async (id) => {
    const commentDelete = await CommentModel.findOne({ where: { id: id } });

    if (!commentDelete) throw "Comment not found!!!";

    return await CommentModel.destroy({ where: { id: id } });
}

CommentService.createComment = async (cmt) => {

    const commentCreate = new CommentModel(cmt);

    await commentCreate.save();
}

export default CommentService;