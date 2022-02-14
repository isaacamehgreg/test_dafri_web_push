/* eslint-disable react/prop-types */
import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, forcePage, onPageChange }) => {
  const handlePage = ({ selected }) => onPageChange(selected + 1);
  return (
    <div className="pagination-box">
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        containerClassName="pagination"
        nextLabel={
          <span>
            <i className="fa fa-angle-right" />
          </span>
        }
        previousLabel={
          <span>
            <i className="fa fa-angle-left" />
          </span>
        }
        activeClassName="active"
        forcePage={forcePage}
        onPageChange={handlePage}
      />
    </div>
  );
};

export default Pagination;
