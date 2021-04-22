import React from 'react'
import './message-dropdown.css';
import {Link} from 'react-router-dom';

import MessageCard from '../MessageCard/MessageCard';

const contacts = [
        {
            name: "Bessie Cooper",
            img: "/img/avatar-img.svg",
            message: "Hi there! Can you help with co..",
            date: "08/12/2020",
            notfication: 2
        },
        {
            name: "Bessie Cooper",
            img: "/img/avatar-msg.svg",
            message: "Hi there! Can you help with co..",
            date: "18/1/2020",
            notfication: 12
        },
        {
            name: "Bessie Cooper",
            img: "/img/avatar-img.svg",
            message: "Hi there! Can you help with co..",
            date: "08/8/2019",
            notfication: 5
        },
        {
            name: "Bessie Cooper",
            img: "/img/avatar-msg.svg",
            message: "Hi there! Can you help with co..",
            date: "08/4/2020"
        },
    ]

const MessageDropdown = ({clickHandler, message, btnName, handleClick, mobileView, messageActive, notificationActive}) => {
    return (
        <>
        {
            !mobileView 
            ? <div className="message-dropdown">
                <div className="message-dropdown-header">
                    <h4>{message}</h4>
                    <div  onClick={() => clickHandler(false)}><img src="/img/close-outline.svg" alt="close-outline" /></div>
                </div>
                {
                    contacts.map(contact => (

                        <MessageCard contact={contact}  />
                    ))
                }
                <button onClick={() => handleClick()} className="btn-container secondary-btn">{btnName}</button>
                </div>
            : <div className={`message-dropdown-mobile ${messageActive && "slide"} ${notificationActive && "slide"}`}>
                <div className="message-dropdown-mobile-inner-container">
                <div className="message-dropdown-mobile-header">
                    <h4>{message}</h4>
                    <div className="close-btn" onClick={() => clickHandler(false)}><img  src="/img/close-outline.svg" alt="close-outline" /></div>
                </div>
                {
                    contacts.map(contact => (
                        <MessageCard contact={contact}  />
                    ))
                }
                <Link to="/messenger" onClick={() => clickHandler(false)} className="mobile-btn btn-container secondary-btn nav-link">{btnName}</Link>
                </div>
              </div>
        }
       </>
    )
}

export default MessageDropdown
