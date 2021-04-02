import React,{useState} from 'react'
import './style.css';
import HeaderComponent from '../../Components/Header/HeaderComponent';
import MessengerMain from '../../Components/MessengerMain/MessengerMain';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Messenger = () => {
   const [toggle, setToggle] = useState(false);

    return (
        <>
        <div className="container">
            <div className={toggle ? "sidebar-container" : "sidebar-container active"}>
                <Sidebar setToggle={setToggle} toggle={toggle}/>
            </div>
            <div className="section-container">
            <HeaderComponent />
            <MessengerMain />
            </div>
            </div>
            
        </>
    )
}

export default Messenger
