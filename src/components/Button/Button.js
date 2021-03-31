import React from 'react'
import "./style.css"

const Button = ({name, clickHandler}) => {
    return (
            <button className="default-btn" onClick={(e) => clickHandler(e)}>
                <div
                  type="submit"
                  className="btn-text"
                >
                  {name}
                </div>
              </button> 
    )
}

export default Button
