import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Filter.scss'

const Filter = ({
  data = [],
  newFilter,
  name,
  noImage,
  category,
  isCategory,
  className,
  setSelectedCategory,
  selectedCategory
}) => {
  const [active, setActive] = useState(false)
  const [text, setText] = useState([])
  const { pathname } = useLocation()
  useEffect(() => {
    setText(data.filter((item) => pathname === item.link))
  }, [pathname])

  const getCategory = (e) => {
    const targetCategory = e.currentTarget.getAttribute('value')
    setSelectedCategory(targetCategory)
  }
  return (
    <>
      {!newFilter ? (
        <div
          className={
            className ? `filter-container ${className}` : 'filter-container'
          }
        >
          <div onClick={() => setActive(!active)} className='filter-title'>
            {isCategory === false && (
              <img src='/img/funnel-outline.svg' alt='funnel outline' />
            )}
            {category?.find(cat => (cat.id == selectedCategory))?.name || (isCategory ? 'Select Category' : 'Filter By')}
            <img
              className='dropdown-icon'
              src='/img/chevron-right-outline.svg'
              alt='chevron-right-outline'
            />
          </div>
          {active && (
            <ul className='filter-dropdown'>
              {category ? (
                category.map((cat) => (
                  <li
                    key={cat.id}
                    value={cat.id}
                    onClick={(e) => {
                      getCategory(e)
                      setActive(!active)
                    }}
                  >
                    {cat.name}
                  </li>
                ))
              ) : (
                <>
                  <li>Progress</li>
                  <li>Recent Uses</li>
                  <li>Most Used</li>
                </>
              )}
            </ul>
          )}
        </div>
      ) : (
        <div className='filter-container'>
          <div onClick={() => setActive(!active)} className='filter-title'>
            {text.length > 0 ? text[0].label : 'Choose the option'}
            <img
              className='dropdown-icon'
              src='/img/chevron-right-outline.svg'
            />
          </div>
          {active && (
            <ul className='filter-dropdown'>
              {data.length > 0 &&
                data.map((item) => (
                  <Link className='nav-link' to={`${item.link}`}>
                    <li onClick={() => setActive(false)}>{item.label}</li>
                  </Link>
                ))}
            </ul>
          )}
        </div>
      )}
    </>
  )
}

export default Filter
