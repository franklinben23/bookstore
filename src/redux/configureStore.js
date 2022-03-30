import { createStore, combineReducers } from 'redux';
import { booksReducer } from './books/books';
import { categoryReducer } from './categories/categories';

const bookApp = combineReducers({
  books: booksReducer,
  categories: categoryReducer,
});

const store = createStore(bookApp);

export default store;
