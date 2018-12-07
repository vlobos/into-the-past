import React from 'react';
import ReactPaginate from 'react-paginate';

const Footer = (props) => {
  return (
    <footer>
      <ReactPaginate previousLabel={"<<"}
                      nextLabel={">>"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={props.pages}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={props.handlePageClick}
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"} />
    </footer>
  )
};

export default Footer;