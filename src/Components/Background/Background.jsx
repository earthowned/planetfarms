import React from 'react'

const Background = ({children, image}) => {
    return (
          <div
            style={{
            background: `linear-gradient(359.99deg, #000000 0.01%, rgba(25, 28, 33, 0.4) 99.99%), url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
               {children}
        </div>
    )
}

export default Background
