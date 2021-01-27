export const BOOKS_ACTION_TYPES = {
  ACTION_FETCH_DATA: "ACTION_FETCH_DATA",
  ACTION_FETCH_DATA_SUCCESS: "ACTION_FETCH_DATA_SUCCESS",
  ACTION_ADD_TO_BASKET: "ACTION_ADD_TO_BASKET",
  ACTION_DELETE_FROM_BASKET: "ACTION_DELETE_FROM_BASKET",
  ACTION_DELETE_ALL_BASKET: "ACTION_DELETE_ALL_BASKET",
};

export const ACTION_FETCH_DATA = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/api/book")
      .then((response) => response.json())
      .then((json) => {
        dispatch(ACTION_FETCH_DATA_SUCCESS(json));
      });
  };
};

export const ACTION_FETCH_DATA_SUCCESS = (books) => {
  return {
    type: BOOKS_ACTION_TYPES.ACTION_FETCH_DATA_SUCCESS,
    value: books.data,
  };
};

export const ACTION_ADD_TO_BASKET = (event) => {
  return {
    type: BOOKS_ACTION_TYPES.ACTION_ADD_TO_BASKET,
    value: event.target.dataset.code,
  };
};

export const ACTION_DELETE_FROM_BASKET = (event) => {
  return {
    type: BOOKS_ACTION_TYPES.ACTION_DELETE_FROM_BASKET,
    value: event.target.dataset.code,
  };
};

export const ACTION_DELETE_ALL_BASKET = () => {
  return {
    type: BOOKS_ACTION_TYPES.ACTION_DELETE_ALL_BASKET,
  };
};
