import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducers = combineReducers({
  books: booksReducer,
  categories: categoryReducer,
});

const store = createStore(rootReducers);

export default store;
