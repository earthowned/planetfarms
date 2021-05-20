import {useEffect, useState} from 'react';
import './pagination.css'

const Pagination = ({ pageNumber = 1, resourceList, setPageNumber }) => {
 const [newPages, setNewPages] = useState([]);  
 const [newUpdatedPages, setNewUpdatedPages] = useState([]);  
  useEffect(() => {
  let addedPages = [...Array(resourceList.totalPages).keys()];
  let newAddedPages = addedPages.map(num => num + 1);
  setNewPages(newAddedPages);
  setNewUpdatedPages(newAddedPages);
  if(newPages.length > 4) {
          if(pageNumber === 1) {
          return setNewUpdatedPages(newPages.slice(pageNumber, pageNumber + 2));
        }
        if(pageNumber === 2) {
          return setNewUpdatedPages(newPages.slice(pageNumber -1, pageNumber + 2));
        }

        if(pageNumber === 3) {
          return setNewUpdatedPages(newPages.slice(pageNumber -2, pageNumber + 2));
        }

        //for third last number
        if(pageNumber === (resourceList.totalPages - 2)) {
          return setNewUpdatedPages(newPages.slice((pageNumber - 3), pageNumber + 1));
        }

        //for second last number
        if(pageNumber === (resourceList.totalPages - 1)) {
          return setNewUpdatedPages(newPages.slice((pageNumber - 3), pageNumber));
        }

        // for last number
        if(pageNumber === resourceList.totalPages) {
          return setNewUpdatedPages(newPages.slice((pageNumber - 4), pageNumber - 1));
        }

        // for other number
        if(pageNumber < (resourceList.totalPages - 1)) {
        setNewUpdatedPages(newPages.slice((pageNumber - 3), pageNumber + 2));
    }
    
  }
  
  }, [resourceList, handlePagination])
 
   function handlePagination (num, multiplier) {
    setPageNumber((pageNumber += num * multiplier))
  }
  
  return (
    <div className='pagination-wrapper'>
      <div className='pagination'>
        <button type='button' disabled={pageNumber == 1} onClick={() => handlePagination(1, -1)}>
          Prev
        </button>
        {newPages.length > 4 && <span onClick={() => setPageNumber(1)} className={pageNumber === 1 && "active"}>1</span>}
        {
          //Pages can be replaced with resourceList.totalPages
          newUpdatedPages && newUpdatedPages.map(num => <PageNumber num={num} pageNumber={pageNumber} setPageNumber={setPageNumber} />)
        }
        {newPages.length > 4 && <span onClick={() => setPageNumber(resourceList.totalPages)} className={resourceList.totalPages === pageNumber && "active"}>{resourceList.totalPages}</span>}
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
