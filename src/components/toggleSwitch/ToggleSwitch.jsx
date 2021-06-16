import React, { useState } from 'react'
import './ToggleSwitch.scss'

function ToggleSwitch () {
  const [active, setActive] = useState(false)
  return (
    <>
      <div className='toggle-main-container'>
        <div
          onClick={() => setActive(!active)}
          className={`${active ? 'toggle-item active' : 'toggle-item'}`}
        />
        <div className='toggle-container' />
      </div>
    </>
  )
}

export default ToggleSwitch
