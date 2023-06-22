import React from 'react';
import './app.css'

const Pagination = ({ booksPerPage, totalBooks, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='paginationBar'>
      <button
        onClick={() => {
          if (currentPage > 1) {
            paginate(currentPage - 1);
          }
        }}
      >
        Previous
      </button>
      <div className='currentPageHolder'>
      {currentPage}
      </div>
      <button
        onClick={() => {
          if (currentPage < pageNumbers.length) {
            paginate(currentPage + 1);
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
