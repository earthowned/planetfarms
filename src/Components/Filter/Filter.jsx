import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './filter.css'

const Filter = ({ data, newFilter }) => {
  const [active, setActive] = useState(false)

  const { pathname } = useLocation()

  return (
    <>
      {
        !newFilter ? <div className='filter-container'>
          <div onClick={() => setActive(!active)} className='filter-title'>
            <img src='/img/funnel-outline.svg' /> filter by <img className='dropdown-icon' src='/img/chevron-right-outline.svg' />
          </div>
          {active && <ul className='filter-dropdown'>
            <li>Progress</li>
            <li>Recent Uses</li>
            <li>Most Used</li>
          </ul>}
        </div>
        : <div className='filter-container'>
          <div onClick={() => setActive(!active)} className='filter-title'>
            {pathname === '/library' ? 'All files'
            : pathname === '/library/collection' ? 'My library & collections'
            : pathname === '/library/collection/users' ? 'Users collection'
            : 'Saved collection'} <img className='dropdown-icon' src='/img/chevron-right-outline.svg' />
          </div>
          {active && <ul className='filter-dropdown'>
            {
              data.length && data.map(item => (
                <Link className='nav-link' to={`${item.link}`}>
                  <li onClick={() => setActive(false)}>{item.label}</li>
                </Link>
              ))
            }
          </ul>}
        </div>
      }
    </>
  )
}

export default Filter
