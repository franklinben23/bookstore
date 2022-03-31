// Actions
const ADDBOOK = 'ADD_BOOK';
const DELETEBOOK = 'DELETE_BOOK';

// Reducer
export default function booksReducer(state = [{ title: 'waterfall', author: 'benjamin', id: 10 }, { title: 'nightsky', author: 'juan', id: 15 }, { title: 'hate love', author: 'jose', id: 20 }], action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state, { title: action.title, author: action.author, id: action.id },
      ];
    case 'DELETE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
}

// Action Creators
function addBook(title, author, id) {
  return {
    type: ADDBOOK, title, author, id,
  };
}

function deleteBook(id) {
  return { type: DELETEBOOK, id };
}

export { deleteBook, addBook };
