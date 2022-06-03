import CommentRepo from "../repositories/comment.repository.js";

const CommentService = {};

CommentService.getAllComments =() => CommentRepo.getAllComments();

CommentService.getCmtHasChildren = () => CommentRepo.getCmtHasChildren();

CommentService.getCommentById = (id) => CommentRepo.getCommentById(id);

CommentService.createComment = (cmt) => CommentRepo.createComment(cmt);

CommentService.updateComment = (id, cmt) => CommentRepo.updateCommnet(id, cmt);

CommentService.deleteComment = (id) => CommentRepo.deleteComment(id);

CommentService.getCmtByParent = (parenId) => CommentRepo.getCmtByParent(parenId);

CommentService.getCmtByPostId = (postId) => CommentRepo.getCmtByPostId(postId);

export default CommentService;
