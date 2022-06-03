import BookmarkRepo from "../repositories/bookmark.repository.js";

const BookmarkService = {};

BookmarkService.getAllBookmarks = () => BookmarkRepo.getAllBookmarks();

BookmarkService.getBookmarkById = (id) => BookmarkService.getBookmarkById(id);

BookmarkService.createBookmark = (bookmark) => BookmarkService.createBookmark(bookmark
    );
BookmarkService.updateBookmark = (id, bookmark) => BookmarkService.updateBookmark(id, bookmark);

BookmarkService.deleteBookmark = (id) => BookmarkService.deleteBookmark(id);

export default BookmarkService;
