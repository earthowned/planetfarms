import React from 'react'
import './group-users.css'

const groupUsers = [
    {
        image: "./img/user.png",
        name: "Jane Cooper",
        active: false,
    },
    {
        image: "./img/user2.png",
        name: "Ronald Richards",
        active: true,
    },
    {
        image: "./img/user-2.png",
        name: "Janny Wilson",
        active: true,
    },
    {
        image: "./img/user.png",
        name: "Cody Fisher",
        active: false,
    },
]
const GroupUsers = () => {
    
    return (
        <>
        {
           groupUsers.map(user => (
            <div className="group-user-container">
                <div className="img-wrapper">
                    <img src={user.image} />
                </div>
                <h4>{user.name}</h4>
                <input type="radio" checked={user.active} className="radio-default" />
            </div>
           )) 
            }
        </>
    )
}

export default GroupUsers
