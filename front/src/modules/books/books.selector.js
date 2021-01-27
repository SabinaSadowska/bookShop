const selectBooks = (state) => state.books.books;
const selectOrder = (state) => state.books.order;

export const selectAllBooks = (state) => selectBooks(state);
export const selectAllOrder = (state) => selectOrder(state);
