import './pagination.css'

const Pagination = ({ pageNumber, resourceList, setPageNumber }) => {
  function handelPagination (num, multiplier) {
    setPageNumber((pageNumber += num * multiplier))
  }

  return (
    <div className='pagination-wrapper'>
      <div className='pagination'>
        <button type='button' disabled={pageNumber < 1} onClick={() => handelPagination(1, -1)}>
          ❮{pageNumber - 1}
        </button>
        <button type='button' disabled={pageNumber >= resourceList.totalPages} onClick={() => handelPagination(1, +1)}>
          ❯{pageNumber + 1}
        </button>
      </div>
    </div>
  )
}

export default Pagination
