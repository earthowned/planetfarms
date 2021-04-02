import React from 'react'
import './style.css';

const messages = [
    {
        sender: "Besie Cooper",
        img: "./img/user2.png",
        message: "Hi there! Can you help with  course Farming Business 2020 \"?\" I saw you in “Also study this course and well",
        date: "08:30 AM"
    },
    {
        sender: "Mikail",
        img: "./img/user.png",
        message: "Hi there! Can you help with  course Farming Business 2020 \"?\" I saw you in “Also study this course and well",
        date: "10:30 AM"
    },
    
    
]
const MessageSlot = () => {
    return (
        <>
        <div className="message-container">
            <h4 className="message-slot-header">Today</h4>
            {
                messages.map(message => {
                    return (
                        <div className="message-card" key={message.sender}>
                            <div className="img-wrapper">
                            <img src={message.img}></img>
                            </div>
                            <div className="message-content">
                            <h4 className="heading-4">{message.sender}</h4>
                            <p>{message.message}</p>
                            </div>
                            <span className="date">{message.date}</span>
                        </div>
                    )
                })
            }

            <h4 className="message-slot-header">Mikhail has been added Cooper James to chat</h4>
            <div className="message-input-container">
                <div className="img-wrapper-2">
                    <img src="./img/attachment.png" />
                     <textarea placeholder="Write your message..." className="message-input"/>
                </div>

                <div className="img-wrapper-1">
                    <img src="./img/message-send.png" />
                </div>
            </div>
        </div> 
        </>
    )
}

export default MessageSlot
