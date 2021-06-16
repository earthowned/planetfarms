import React from 'react'
import './CardLayout.css'

const CardLayout = ({ children, data }) => {
  return (
    <div className={data.length === 1
      ? 'card-layout-container single'
      : data.length === 2
        ? 'card-layout-container double'
        : 'card-layout-container'}
    >
      {children}
    </div>
  )
}

export default CardLayout
