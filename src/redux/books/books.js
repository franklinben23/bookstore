// Reducer
export default function booksReducer(state = [], action) {
  switch (action.type) {
    case 'API_DATA':
      return (action.payload);
    default: return state;
  }
}

// Action Creators

const apiBook = (data) => ({
  type: 'API_DATA',
  payload: data,
});

const getBooks = () => async (dispatch) => {
  const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/50ClJ23HdaBoC56h87C9/books/';
  const response = await fetch(apiUrl);
  const data = await response.json();
  const data1 = [];
  Object.entries(data).forEach(([key, value]) => {
    const newValue = value[0];
    const newdata = {
      ...newValue,
      id: key,
    };
    data1.push(newdata);
  });
  dispatch(apiBook(data1));
};

const addBook = (id, title, author) => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/50ClJ23HdaBoC56h87C9/books/', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category: 'my-category',
    }),
  });
  dispatch(getBooks());
};

const deleteBook = (id) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/50ClJ23HdaBoC56h87C9/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  dispatch(getBooks());
};

export { deleteBook, addBook, getBooks };
