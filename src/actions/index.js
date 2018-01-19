export function SelectBook(book) {
  // select book is an action creator, it needs to return an action
  // an object with a type property and then something more about the action as payload.
  // console.log('a book has been selected', book.title);
  return {
    type: 'BOOK_SELECTED',
    payload: book, 
  }
}