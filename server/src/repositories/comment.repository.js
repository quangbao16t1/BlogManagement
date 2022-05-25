import CommentService from "../services/comment.service.js";

const CommentRepo = {};

CommentRepo.getAllComments = CommentService.getAllComments();

CommentRepo.getCommentById = (id) => CommentService.getCommentById(id);

CommentRepo.createComment = (cmt) => CommentService.createComment(cmt);

CommentRepo.updateCommnet = (id, cmt) => CommentService.updateCommnet(id, cmt);

CommentRepo.deleteComment = (id) => CommentService.deleteComment(id);

export default CommentRepo;
