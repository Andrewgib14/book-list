
//select book is an action creator, it will need an action type
export const SELECT_BOOK = "SELECT_BOOK"
export function selectBook(book) {
  ({ type: SELECT_BOOK, payload: book })
}
