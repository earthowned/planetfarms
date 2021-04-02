import React from 'react'
import './style.css'

const HeaderComponent = () => {
    return (
        <>
        <header className="header-container">
            <h3>Messenger</h3>
            <ul>
                <li><img src="./img/person.png" /><span>My dashboard</span></li>
                <li className="message"><img src="./img/message.png" />
                <span className="message-noti">6</span>
                </li>
                <li><img src="./img/bell.png" /></li>
                <li><img src="./img/user.png" /></li>
            </ul>
            </header>
        </>
    )
}

export default HeaderComponent
