import React, {useState} from 'react'
import "./filter.css"

const Filter = () => {
    const [active, setActive] = useState(false);
    return (
        <>
        <div className="filter-container">
            <div onClick={() => setActive(!active)} className="filter-title">
                <img src='/img/funnel-outline.svg' /> filter by <img className="dropdown-icon" src="/img/chevron-right-outline.svg" ></img>
            </div>
             {active && <ul className="filter-dropdown">
                    <li>Progress</li>
                    <li>Recent Uses</li>
                    <li>Most Used</li>
                </ul>}
        </div>
        </>
    )
}

export default Filter
