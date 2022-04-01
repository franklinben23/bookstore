import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducers = combineReducers({
  books: booksReducer,
  categories: categoryReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
