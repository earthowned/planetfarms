import './message-dropdown.css';
import {Link} from 'react-router-dom';
import React from 'react'
import MessageCard from '../MessageCard/MessageCard';

const contacts = [
        {
            name: "Bessie Cooper",
            img: "./img/contact.png",
            message: "Hi there! Can you help with co..",
            date: "08/12/2020",
            notfication: 2
        },
        {
            name: "Bessie Cooper",
            img: "./img/user2.png",
            message: "Hi there! Can you help with co..",
            date: "18/1/2020",
            notfication: 12
        },
        {
            name: "Bessie Cooper",
            img: "./img/contact.png",
            message: "Hi there! Can you help with co..",
            date: "08/8/2019",
            notfication: 5
        },
        {
            name: "Bessie Cooper",
            img: "./img/user2.png",
            message: "Hi there! Can you help with co..",
            date: "08/4/2020"
        },
    ]
const MessageDropdown = ({clickHandler}) => {
    
    return (
        <div className="message-dropdown">
            <div className="message-dropdown-header">
                <h4>Your messages</h4>
                <div onClick={() => clickHandler(false)}><img  src="./img/close-outline.png" /></div>
            </div>
            {
                contacts.map(contact => (
                    <MessageCard contact={contact} />
                ))
            }
        </div>
    )
}

export default MessageDropdown
