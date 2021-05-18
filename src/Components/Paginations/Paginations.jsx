import './pagination.css'

const pages = [1, 2, 3, 4];
const Pagination = ({ pageNumber, resourceList, setPageNumber }) => {
  function handlePagination (num, multiplier) {
    setPageNumber((pageNumber += num * multiplier))
  }
  return (
    <div className='pagination-wrapper'>
      <div className='pagination'>
        <button type='button' disabled={pageNumber == 1} onClick={() => handlePagination(1, -1)}>
          Prev
        </button>
        {
          //Pages can be replaced with resourceList.totalPages
          pages.map(num => <PageNumber num={num} pageNumber={pageNumber} setPageNumber={setPageNumber} />)
        }
        <button type='button' disabled={pageNumber >= resourceList.totalPages} onClick={() => handlePagination(1, +1)}>
          Next
        </button>
      </div>
    </div>
  )
}

function PageNumber ({num, pageNumber, setPageNumber}) {
  return (
    <span onClick={() => setPageNumber(num)} className={num === pageNumber && "active"}>{num}</span>
  )
}
export default Pagination
