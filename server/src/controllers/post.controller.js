import Message from "../commons/message.js";
import PostService from "../services/post.service.js";


const PostController = {};

PostController.getAllPosts = async (req, res) => {
    try {
        const posts = await PostService.getAllPosts();
        res.status(200).json({
            success: true,
            Posts: posts
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
        // res.status(500).json({
        // })
    }
}

PostController.deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await PostService.deletePost(id);
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

PostController.getPostById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await PostService.getPostById(id);
        res.status(200).json({
            success: true,
            Post: result
        })
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}

PostController.createPost = async (req, res) => {
    const post = {
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
        imageCover: req.body.imageCover,
        createAt: Date.now(),
    }
    await PostService.createPost(post)
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

PostController.updatePost = async (req, res) => {
    const postUpdate = {
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
        imageCover: req.body.imageCover,
        updateAt: Date.now(),
    }

    const id = req.params.id;

    await PostService.updatePost(id, postUpdate)
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

PostController.searchPost = async (req, res) => {
    try {
        const search = req.query.title;

        const posts = await PostService.searchPost(search);
        res.status(200).json({
            success: true,
            PostSearch: posts
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


export default PostController;