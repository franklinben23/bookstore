// widgets.js

// Actions
const CHECK = 'CHECK_STATUS';

// Reducer
export default function categoryReducer(state = [], action) {
  switch (action.type) {
    case 'CHECK_STATUS':
      return 'Under construction';
    default: return state;
  }
}

// Action Creators
export function deleteBook() {
  return { type: CHECK };
}
