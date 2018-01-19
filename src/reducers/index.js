import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.js';
import ActiveBook from  './reducer_activeBook.js';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
