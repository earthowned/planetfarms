import React,{useState} from 'react'
import MessageSlot from '../MessageSlot/MessageSlot';
import GroupModal from '../GroupModal/GroupModal';
import CallModal from '../CallModal/CallModal';

import "./message-left-component.css";

const MessageLeftComponent = () => {
    const [addGroup, setAddGroup] = useState(false);
    const [call, setCall] = useState(false);

    function makeCall () {
        setAddGroup(true);
    }
    return (
        <>
        {addGroup && <GroupModal clickHandler={setAddGroup} />}
        {call && <CallModal clickHandler={setCall} />}
         <div className="message-header">
             <div className="message-account">
            
            <div className="account-section">

            <div className="img-wrapper">

             <img src="./img/user2.png"></img>
            </div>
             <div className="account-user">
                 <h4 className="heading-4">Besie Cooper</h4>
                 <div className="date">
                     <span>Last seen 2 hours ago</span>
                 </div>
             </div>
            </div>
            
             <ul className="messenger-list-container">
                 <li className="messenger-list-item" onClick={() => makeCall()}><img src="./img/person-add.png"></img></li>
                 <li className="messenger-list-item" onClick={() => setCall(true)}><img src="./img/phonecall.png"></img></li>
                 <li className="messenger-list-item"><img src="./img/video-outline.png"></img></li>
                 <li className="messenger-list-item"><img src="./img/toggle-btn.png"></img></li>
             </ul>
             </div>
         </div>
         <MessageSlot />
        </>
    )
}

export default MessageLeftComponent
