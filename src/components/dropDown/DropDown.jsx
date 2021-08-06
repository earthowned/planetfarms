import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import useHideOnClick from '../../utils/useHideOnClick'
import './DropDown.scss'

const DropDown = ({ data, title, getRole, id, role }) => {
  const [active, setActive] = useState()
  const domNode = useHideOnClick(() => {
    setActive(false)
  })

  function clickHandler (item) {
    setActive(false)
    getRole(item, id)
  }
  
  function showDropdown () {
    setActive(!active)
  }

  return (
    <div className='dropdown-wrapper' ref={domNode}>
      <div onClick={showDropdown} className='dropdown-title'>
        <span>{title}</span>
        <img
          className='dropdown-icon'
          src='/img/chevron-right-outline.svg'
        />
      </div>
      {active && (
        <ul className='dropdown-lists'>
          {data.length > 0 &&
          data.filter(el => el !== role).map((item) => (
            <li onClick={() => clickHandler(item)}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropDown
