import {useEffect, useState} from 'react';
import './pagination.css'

const Pagination = ({ pageNumber = 1, resourceList, setPageNumber }) => {
 const [newPages, setNewPages] = useState([]);  
  useEffect(() => {
  //   if(pageNumber < (resourceList.totalPages - 2)) {
  //  setNewPages(pages.slice((pageNumber - 1), pageNumber + 3));
  //   }
  let addedPages = [...Array(resourceList.totalPages).keys()];
  let newAddedPages = addedPages.map(num => num + 1);
  setNewPages(newAddedPages);
  }, [resourceList])
 
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
          newPages && newPages.map(num => <PageNumber num={num} pageNumber={pageNumber} setPageNumber={setPageNumber} />)
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
