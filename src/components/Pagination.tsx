import React, { useState, useEffect } from 'react';

interface PaginationProps<T> {
  data: T[];
  itemsPerPage: number;
  render: (data: T[]) => JSX.Element;
}

const Pagination = <T,>({ data, itemsPerPage, render }: PaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginatedData, setPaginatedData] = useState<T[]>([]);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setPaginatedData(data.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, data, itemsPerPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div>
      {render(paginatedData)}
      <div className='flex justify-between mt-4'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className='px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50'
        >
          Previous
        </button>
        <span className='px-4 py-2'>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className='px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
