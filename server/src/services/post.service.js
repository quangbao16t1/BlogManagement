import connectDB from "../models/index.js";


const PostModel = connectDB.posts;
const Op = connectDB.Sequelize.Op;

const PostService = {};

PostService.getAllPosts = async () => {
    return await PostModel.findAll({
        include: [{
            model: connectDB.users,
            // attributes: ['firstName', 'lastName']
        }]
    });
}

PostService.getPostById = async (id) => {
    return await PostModel.findOne({
        where: { id: id },
        include: [{
            model: connectDB.users,
        }]
    })
}

PostService.updatePost = async (id, post) => {

    const postUpdate = await PostModel.findOne({ where: { id: id } });

    if (!postUpdate) throw "Post not found!!!";

    Object.assign(postUpdate, post);

    await postUpdate.save();
}

PostService.deletePost = async (id) => {
    const postDelete = await PostModel.findOne({ where: { id: id } });

    if (!postDelete) throw "Post not found!!!";

    return await PostModel.destroy({ where: { id: id } });
}

PostService.createPost = async (post) => {
    
    const postCreate = new PostModel(post);

    await postCreate.save();
}

PostService.searchPost = async (title) => {

    const search = title ? { title: { [Op.like]: `%${title}%` } } : null;
    
    return await PostModel.findAll({
        where: search,
        include: [{
            model: connectDB.users,
        }]
    })
}

export default PostService;