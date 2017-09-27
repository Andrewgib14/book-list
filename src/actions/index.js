
//select book is an action creator, it will need an action type
export const BOOK_SELECTED = "BOOK_SELECTED"
export const selectBook = book => ({ type: BOOK_SELECTED, payload: book });
