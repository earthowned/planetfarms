<<<<<<< HEAD
import {useState} from 'react'
import MessageDropdown from '../MessageDropdown/MessageDropdown'
import './header-component.css'
import {useHistory} from 'react-router-dom';

const HeaderComponent = ({title}) => {
    const [active, setActive] = useState(false);
    const [notification, setNotification] = useState(false);

    function messageNoti () {
        setActive(!active);
        setNotification(false);
    }

    function notificationNoti () {
        setNotification(!notification);
        setActive(false);
    }
    let history = useHistory();

  function handleClick() {
    history.push("/messenger");
  }
    return (
        <>
        <header className="header-container">
            <h3>{title}</h3>
            <ul>
                <li onClick={() => history.push('/dashboard')}><img src="./img/person.png" /><span>My dashboard</span></li>
                <li onClick={() => messageNoti()} 
=======
<<<<<<<< HEAD:src/Components/Header/HeaderComponent.jsx
import {useState} from 'react'
import MessageDropdown from '../MessageDropdown/MessageDropdown'
import './header-component.css'
========
import React from 'react'
import './style.css'
>>>>>>>> 901c388a... messenger-file-structure-changed:src/Components/Header/HeaderComponent.js

const HeaderComponent = () => {
    return (
        <>
        <header className="header-container">
            <h3>Messenger</h3>
            <ul>
                <li><img src="./img/person.png" /><span>My dashboard</span></li>
<<<<<<<< HEAD:src/Components/Header/HeaderComponent.jsx
                <li onClick={() => setActive(!active)} 
>>>>>>> 901c388a... messenger-file-structure-changed
                className="message">
                <img src="./img/message.png" />
                {active || <div className="message-noti">6
                </div>}
<<<<<<< HEAD
                {active && <MessageDropdown clickHandler={setActive} message="Your messages" btnName="See all messages" handleClick={handleClick}/>}
                </li>
                <li onClick={() => notificationNoti()}
                className="message">
                    <img src="./img/bell.png" />
                    {notification && <MessageDropdown clickHandler={setNotification} message="Your notification" btnName="See all notifications" handleClick={handleClick}/>}
                </li>
                <li><img src="./img/user.png" /></li>
            </ul>

=======
                {active && <MessageDropdown clickHandler={setActive}/>}
========
                <li className="message"><img src="./img/message.png" />
                <span className="message-noti">6</span>
>>>>>>>> 901c388a... messenger-file-structure-changed:src/Components/Header/HeaderComponent.js
                </li>
                <li><img src="./img/bell.png" /></li>
                <li><img src="./img/user.png" /></li>
            </ul>
>>>>>>> 901c388a... messenger-file-structure-changed
            </header>
        </>
    )
}

export default HeaderComponent
