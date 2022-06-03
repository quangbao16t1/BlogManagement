import PostRepo from "../repositories/post.repository.js";


const PostService = {};

PostService.getAllPosts = PostRepo.getAllPosts();
PostService.getPostById = (id) => PostRepo.getPostById(id);
PostService.createPost = (post) => PostRepo.createPost(post);
PostService.updatePost = (id, post) => PostRepo.updatePost(id, post);
PostService.deletePost = (id) => PostRepo.deletePost(id);
PostService.searchPost = (search) => PostRepo.searchPost(search);


export default PostService;
