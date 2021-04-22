import React from 'react'
import { useHistory } from 'react-router';
import useSizeFinder from '../../utils/SizeFinder';
import './message-card.css'
const MessageCard = ({contact, clickHandler}) => {
    const history = useHistory();
    const windowWidth = useSizeFinder();
    return (
        <button className="contact-card" key={contact.name} onClick={() => windowWidth > 850 ? clickHandler(true) : history.push(`/messenger/${contact.name}`)}>
                <div className="img-wrapper">
                    <img src={contact.img} />
                </div>
                <div className="contact-text">
                    <h4>{contact.name}</h4>
                    <p>{contact.message}</p>
                </div>
                <div className="contact-noti">
                    <span>{contact.date}</span>
                    <div className="noti">2</div>
                </div>
        </button>
    )
}

export default MessageCard
