import React from "react";
import ReactPaginate from 'react-paginate';

class SearchResults extends React.Component {
  constructor(props){
    super(props);
  }
  render () {

    let events = this.props.data.map(function(event,index){
      return (
        <div key={index}>
          {event.date} <br/>
          {event.description}
        </div>
      )
    })
    return (
      <section className="search__results">
        <div>{events}</div>
        <ReactPaginate previousLabel={"<<"}
                        nextLabel={">>"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={10}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.props.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"} />
      </section>
    )
  }
}

export default SearchResults;

