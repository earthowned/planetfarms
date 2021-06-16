import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Filter.scss'

const Filter = ({ data = [], newFilter, name, noImage }) => {
  const [active, setActive] = useState(false)
  const [text, setText] = useState([])
  const { pathname } = useLocation()
  useEffect(() => {
    setText(data.filter(item => pathname === item.link))
  }, [])

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
              {text.length > 0
                ? text[0].label
                : 'Choose the option'}
              <img className='dropdown-icon' src='/img/chevron-right-outline.svg' />
            </div>
            {active && <ul className='filter-dropdown'>
              {
              data.length > 0 && data.map(item => (
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
