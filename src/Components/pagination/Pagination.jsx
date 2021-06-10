import { useEffect, useState } from 'react'
import './Pagination.css'

const Pagination = ({ pageNumber = 1, resourceList, setPageNumber }) => {
  const [pageNum, setPageNum] = useState([])
  useEffect(() => {
    const addedPages = [...Array(resourceList.totalPages).keys()].map(num => num + 1)
    const offset = (3 - pageNumber) > 0 ? (3 - pageNumber) : 0
    let visiblePages = addedPages.slice(pageNumber - 3 + offset, pageNumber + 2)
    if (pageNumber > 3) visiblePages = [1, ...visiblePages]
    if (addedPages.length - pageNumber > 2) visiblePages.push(resourceList.totalPages)
    setPageNum(visiblePages)
  }, [resourceList, pageNumber])

  function handlePagination (num, multiplier) {
    setPageNumber((pageNumber += num * multiplier))
  }

  return (
    <div className='pagination-wrapper'>
      <div className='pagination'>
        <button type='button' disabled={pageNumber === 1} onClick={() => handlePagination(1, -1)}>
          Prev
        </button>
        {
          // Pages can be replaced with resourceList.totalPages
          pageNum && pageNum.map(num => <PageNumber num={num} pageNumber={pageNumber} setPageNumber={setPageNumber} />)
        }
        <button type='button' disabled={pageNumber >= resourceList.totalPages} onClick={() => handlePagination(1, +1)}>
          Next
        </button>
      </div>
    </div>
  )
}

function PageNumber ({ num, pageNumber, setPageNumber }) {
  return (
    <span onClick={() => setPageNumber(num)} className={num === pageNumber && 'active'}>{num}</span>
  )
}
export default Pagination
