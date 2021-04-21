import React from 'react'
import "./mobile-message.css"
import BackButton from '../BackButton/BackButton'
import MessageSlot from "../MessageSlot/MessageSlot"

import "./mobile-message.css"
import { Link, useHistory } from 'react-router-dom'

const MobileMessage = () => {
    const history = useHistory();
    return (
        <>
            <div className="mobile-messenger-message-container">
                <div className="mobile-messenger-message-header">
                   <div onClick={() => history.push('/messenger')}><BackButton /></div>
                    <div className="account-user">
                        <h4 className="heading-4">Besie Cooper</h4>
                        <div className="date">
                            <span>Last seen 2 hours ago</span>
                        </div>
                    </div>
                    <img src="/img/more-horizontal-outline-1.svg"></img>
                </div>
                <MessageSlot />
            </div>
        </>
    )
}

export default MobileMessage
