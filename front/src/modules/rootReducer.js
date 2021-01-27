import { combineReducers } from "redux";
import books from "./books/books.reducer";

export default combineReducers({
  books: books || [],
});
