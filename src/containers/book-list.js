import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map(book => {
      return (
        <li 
          key={book.title} 
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      )
    })
  }
 
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state /* { books } */ ) {
  //whatever will return from here will show up in props for this component
  return {
    books: state.books // books

  } 
}

// anything returned form this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever select book is called, result is passed to all of our reducers.
  return bindActionCreators({ selectBook: SelectBook }, dispatch);
}

//Promote BookList from a component to a container, needs to know about the dispatch method, selectBook.
// Make it available as a prop 
export default connect(mapStateToProps, mapDispatchToProps)(BookList);