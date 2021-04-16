import React from 'react'
import "./button.css"

const Button = ({name, clickHandler}) => {
  function submitForm(e){
    e.preventDefault();
    clickHandler(e)
  }
    return (
            <button type="submit" className="btn-default" onClick={(e) => submitForm(e)}>
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
