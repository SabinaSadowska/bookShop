import { BOOKS_ACTION_TYPES } from "./books.action";

const INITIAL_STATE = {
  books: [],
  order: [],
};

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case BOOKS_ACTION_TYPES.ACTION_FETCH_DATA:
      return (state = { ...state });

    case BOOKS_ACTION_TYPES.ACTION_FETCH_DATA_SUCCESS:
      return (state = {
        ...state,
        books: action.value || [],
      });

    case BOOKS_ACTION_TYPES.ACTION_ADD_TO_BASKET:
      return (state = {
        ...state,
        books: [...state.books],
        order: [...state.order, { id: action.value, quantity: 1 }],
      });

    case BOOKS_ACTION_TYPES.ACTION_DELETE_FROM_BASKET:
      return (state = {
        ...state,
        books: [...state.books],
        order: state.order.filter(function (item) {
          return item.id !== action.value;
        }),
      });

    case BOOKS_ACTION_TYPES.ACTION_DELETE_ALL_BASKET:
      return (state = {
        ...state,
        books: [...state.books],
        order: [],
      });

    default:
      return state;
  }
}
