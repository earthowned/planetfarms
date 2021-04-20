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
                <li style={{cursor:"pointer"}} onClick={() => history.push('/dashboard')}><img src="/img/user-green-outline.svg" alt="user-green-outline" /><span >My dashboard</span></li>
                <li onClick={() => messageNoti()} 
                className="message">
                <img src="/img/email.svg" alt="email-icon" />
                {active || <div className="message-noti">6
                </div>}
                {active && <MessageDropdown clickHandler={setActive} message="Your messages" btnName="See all messages" handleClick={handleClick}/>}
                </li>
                <li onClick={() => notificationNoti()}
                className="message">
                    <img src="/img/bell-icon.svg" alt="bell-icon" />
                    {notification && <MessageDropdown clickHandler={setNotification} message="Your notification" btnName="See all notifications" handleClick={handleClick}/>}
                </li>
                <li><img src="/img/avatar-img.svg" alt="avatar-img" /></li>
            </ul>
            </header>
        </>
    )
}

export default HeaderComponent
