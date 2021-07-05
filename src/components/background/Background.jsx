import React from 'react'

const Background = ({ children, image, tag }) => {
  return (
    <div
      style={{
        background: `linear-gradient(359.99deg, #000000 0.01%, rgba(25, 28, 33, 0.4) 99.99%), 
        url(${process.env.REACT_APP_CDN_BASE_URL + tag + image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '4px'
      }}
    >
      {children}
    </div>
  )
}

export default Background
