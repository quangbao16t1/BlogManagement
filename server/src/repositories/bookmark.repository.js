import BookmarkService from "../services/bookmark.service.js";

const BookmarkRepo = {};

BookmarkRepo.getAllBookmarks = BookmarkService.getAllBookmarks();
BookmarkRepo.getBookmarkById = (id) => BookmarkService.getBookmarkById(id);
BookmarkRepo.createBookmark = (bookmark) => BookmarkService.createBookmark(bookmark);
BookmarkRepo.updateBookmark = (id, bookmark) => BookmarkService.updateBookmark(id, bookmark);
BookmarkRepo.deleteBookmark = (id) => BookmarkService.deleteBookmark(id);

export default BookmarkRepo;
