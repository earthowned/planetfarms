import React,{useState} from 'react'
import SearchComponent from '../SearchComponent/SearchComponent';
import './messenger-main.css';
import MessageCard from '../MessageCard/MessageCard';
import MessageRightComponent from '../MessageRightComponent/MessageRightComponent';


const contacts = [
        {
            name: "Bessie Cooper",
            img: "/img/avatar-msg.svg",
            message: "Hi there! Can you help with co..",
            date: "08/12/2020",
            notfication: 2
        },
        {
            name: "Bessie Cooper",
            img: "/img/avatar-img.svg",
            message: "Hi there! Can you help with co..",
            date: "18/1/2020",
            notfication: 12
        },
        {
            name: "Bessie Cooper",
            img:"/img/avatar-img.svg",
            message: "Hi there! Can you help with co..",
            date: "08/8/2019",
            notfication: 5
        },
        {
            name: "Bessie Cooper",
            img:  "/img/avatar-msg.svg",
            message: "Hi there! Can you help with co..",
            date: "08/4/2020"
        },
    ]
const MessengerMain = () => {
    const [active, setActive] = useState(false);
    
    return (
        <>
           <div className="messenger-wrapper">
               <div className="col-1">
                   <SearchComponent />

                    {/* contact-component */}
                   <div className="contact-container">
                       {
                           contacts.map(contact => {
                               return (
                                    <MessageCard contact={contact} clickHandler={setActive}/>
                               )
                           })
                       }
               </div>

                {/* contact-component */}
                <h3 className="contact-header">Group chats</h3>
                   <div className="contact-container">
                         {
                           contacts.map(contact => {
                               return (
                                    <MessageCard contact={contact} clickHandler={setActive}/>
                               )
                           })
                       }
               </div>
               </div>
               {active ? (
                   <div className="col-2-alternative">
                       <MessageRightComponent setActive={setActive}></MessageRightComponent>
                    </div>
               )  : (<div className="col-2">
                   <h4>Select chat to start messaging</h4>
               </div>
               )
               }
               
            </div> 
        </>
    )
}

export default MessengerMain
