import React from 'react'
import './search-component.css'

const SearchComponent = ({ className, search, setSearch, showEditIcon }) => {
  return (

  // <div className={className}>
    <div className='search-btn'>
      <img src='/img/search-outline-icon.svg' alt='Search' /> <input value={search} type='text' onChange={(e) => setSearch(e.target.value)} className='search-1' placeholder='Search...' />
      {showEditIcon && <img src='/img/edit-icon.svg' alt='edit icon' />}
      {/* </div> */}
      {/* <button className="edit-btn">
        <img src="/img/edit-icon.svg"></img>
        </button> */}
    </div>
  // </div>

  )
}

export default SearchComponent
