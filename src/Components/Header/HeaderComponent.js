import {useState} from 'react'
import MessageDropdown from '../MessageDropdown/MessageDropdown'
import './style.css'

const HeaderComponent = () => {
    const [active, setActive] = useState(false);
    return (
        <>
        <header className="header-container">
            <h3>Messenger</h3>
            <ul>
                <li><img src="./img/person.png" /><span>My dashboard</span></li>
                <li onClick={() => setActive(true)} className="message"><img src="./img/message.png" />
                {active || <div className="message-noti">6
                </div>}
                {active && <MessageDropdown />}
                </li>
                <li><img src="./img/bell.png" /></li>
                <li><img src="./img/user.png" /></li>
            </ul>
            </header>
        </>
    )
}

export default HeaderComponent
