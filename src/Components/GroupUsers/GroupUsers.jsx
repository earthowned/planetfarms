import React from 'react'
import Radiobox from '../Radiobox/Radiobox';
import './group-users.css'

const groupUsers = [
    {
        image: "/img/avatar-img.svg",
        name: "Jane Cooper",
        active: false,
    },
    {
        image: "/img/avatar-msg.svg",
        name: "Ronald Richards",
        active: true,
    },
    {
        image: "/img/avatar-img.svg",
        name: "Janny Wilson",
        active: true,
    },
    {
        image: "/img/avatar-msg.svg",
        name: "Cody Fisher",
        active: false,
    },
     {
        image: "/img/avatar-img.svg",
        name: "Janny Wilson",
        active: true,
    },
    {
        image: "/img/avatar-msg.svg",
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
                <div>
                <div className="img-wrapper">
                    <img src={user.image} alt="users" />
                </div>
                <h4>{user.name}</h4>
                </div>
                <Radiobox />
            </div>
           )) 
            }
        </>
    )
}

export default GroupUsers
