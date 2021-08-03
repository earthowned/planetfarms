import React, { useState } from 'react'
import './DropDown.scss';

const DropDown = ({data, title, getRole, id, role}) => {
  const[active, setActive] = useState()

  function clickHandler (item) {
    setActive(false)
    getRole(item, id)
  }

  return (
    <div className='dropdown-wrapper'>
      <div onClick={() => setActive(!active)} className='dropdown-title'>
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
          ))
        }
        </ul>
        )
      }
    </div>
    )
}

export default DropDown
