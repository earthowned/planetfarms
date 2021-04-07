import React from 'react'
import './group-users.css'


const GroupUsers = ({data}) => {
    
    return (
        <>
        {
           data.map(item => (
            <div className="group-user-container">
                <div className="img-wrapper">
                    <img src={item.image} />
                </div>
                <h4>{item.name}</h4>
                <input type="radio" checked={item.active} className="radio-default" />
            </div>
           )) 
            }
        </>
    )
}

export default GroupUsers
