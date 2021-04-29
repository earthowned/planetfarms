import React from 'react'
import './secondary-btn.css'

const Secondarybtn = ({name, image}) => {
    return (
        /* to change the width of the button
            wrap container class around button component (not in this component)
            and specify the width in the component
            where you call this btn component */
        <button className="secondary-btn-variant">
            <span>{name}</span>
            {image && <img src={image} alt={name} />}
        </button>
    )
}

export default Secondarybtn
