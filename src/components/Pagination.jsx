import React from "react";

const Pagination = ({
  filteredData,
  currentPage,
  setCurrentPage,
  rowsPerPage,
}) => {
  const numOfPages = Math.ceil(filteredData.length / rowsPerPage);
  const pageNos = new Array(5).fill();

  const goToPrevPage = () => {
    setCurrentPage((prevState) => prevState - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevState) => prevState + 1);
  };
  return (
    <>
      <div className="pagination-info">
        Showing{" "}
        {Math.min((currentPage - 1) * rowsPerPage + 1, filteredData.length)} to{" "}
        {Math.min(currentPage * rowsPerPage, filteredData.length)} of{" "}
        {filteredData.length} todos.
      </div>
      <div className="pagination-controls">
        <button disabled={currentPage === 1} onClick={goToPrevPage}>
          <i className="fa fa-arrow-left"></i>
        </button>
        {pageNos.map((_, index) => {
          const pageNo = index + currentPage - 2;

          const temp =
            pageNo > 0 && pageNo <= numOfPages ? (
              <span
                onClick={() => {
                  setCurrentPage(pageNo);
                }}
                className={`${
                  currentPage === pageNo && "pagination-active-page"
                } pagination-pages`}
              >
                {index + currentPage - 2}
              </span>
            ) : (
              <span className="pagination-pages"></span>
            );

          return temp;
        })}

        <button disabled={currentPage === numOfPages} onClick={goToNextPage}>
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
};

export default Pagination;
