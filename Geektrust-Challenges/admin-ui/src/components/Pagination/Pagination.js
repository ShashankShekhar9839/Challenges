import './pagination.scss';

function Pagination({currentPage, itemsPerPage, onPageChange, totalPages }) {
  let pages = new Array(totalPages).fill(0);
   
  const handleClick = (page) => {
    onPageChange(page);
  }

  return (
    <div className="pagination-wrapper">
      <span onClick={() => handleClick(currentPage - 1)} disabled = {currentPage === 1}>Prev</span>
      {pages?.map((item, index) => (
        <span key={index} onClick={() => handleClick(index + 1)}>
          {index + 1}
        </span>
      ))}
      <span>Next</span>
    </div>
  );
}

export default Pagination;
