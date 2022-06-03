import connectDB from "../models/index.js";

const CommentModel = connectDB.comments;

const CommentRepo = {};

CommentRepo.getAllComments = async () => {
    return await CommentModel.findAll({
        include: [{
            model: connectDB.users
        }, {
            model: connectDB.posts
        }]
    });
}

CommentRepo.getCommentById = async (id) => {
    return await CommentModel.findOne({
        where: { id: id },
        include: [{
            model: connectDB.users
        }, {
            model: connectDB.posts
        }]
    })
}

CommentRepo.updateCommnet = async (id, cmt) => {

    const commentUpdate = await CommentModel.findOne({ where: { id: id } });

    if (!commentUpdate) throw "Comment not found!!!";

    Object.assign(commentUpdate, cmt);

    await commentUpdate.save();
}

CommentRepo.deleteComment = async (id) => {
    const commentDelete = await CommentModel.findOne({ where: { id: id } });

    if (!commentDelete) throw "Comment not found!!!";

    return await CommentModel.destroy({ where: { id: id } });
}

CommentRepo.createComment = async (cmt) => {

    const commentCreate = new CommentModel(cmt);

    await commentCreate.save();
}

CommentRepo.getCmtByParent = async (parentId) => {
    return await CommentModel.findAll({
        where: { parentId: parentId },
        include: [{
            model: connectDB.users
        }, {
            model: connectDB.posts
        }]
    })
}

CommentRepo.getCmtByPostId = async (postId) => {
    return await CommentModel.findAll({
        where: { postId: postId },
        include: [{
            model: connectDB.users,
            attributes: ['firstName', 'lastName']
        }]
    })
}

CommentRepo.getCmtHasChildren = async () => {
    return await CommentModel.findAll({
        include: [{
            model: connectDB.comments,
            as: 'children'
        }]
    })

}

export default CommentRepo;