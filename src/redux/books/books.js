// Actions
const ADDBOOK = 'ADD_BOOK';
const DELETEBOOK = 'DELETE_BOOK';

// Reducer
export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state, { title: action.title, author: action.author, id: action.id },
      ];
    case 'DELETE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
};

// Action Creators
export function addBook(title, author, id) {
  return {
    type: ADDBOOK, title, author, id,
  };
}

export function deleteBook(id) {
  return { type: DELETEBOOK, id };
}
