import { useState } from 'react'
import BackButton from '../backButton/BackButton'
import MessageSlot from '../messageSlot/MessageSlot'
import { Link, useHistory } from 'react-router-dom'
import GroupModal from '../groupModal/GroupModal'
import CallModal from '../callModal/CallModal'
import { groupUsersData } from '../../constants/sampleData'
import './MobileMessage.scss'

const MobileMessage = () => {
  const [optionState, setOptionState] = useState(false)
  const [addGroup, setAddGroup] = useState(false)
  const [call, setCall] = useState(false)
  const history = useHistory()

  function makeCall () {
    setAddGroup(true)
    setOptionState(false)
  }

  function makePhoneCall () {
    setCall(true)
    setOptionState(false)
  }
  return (
    <>
      {addGroup && <GroupModal clickHandler={setAddGroup} data={groupUsersData} btnName='add members' />}
      {call && <CallModal clickHandler={setCall} />}
      <div className='mobile-messenger-message-container'>
        <div className='mobile-messenger-message-header'>
          <div onClick={() => history.push('/messenger')}><BackButton /></div>
          <div className='account-user'>
            <h4 className='heading-4'>Besie Cooper</h4>
            <div className='date'>
              <span>Last seen 2 hours ago</span>
            </div>
          </div>
          <div className='horizontal-mobile-burger' onClick={() => setOptionState(!optionState)}><img src='/img/more-horizontal-outline-1.svg' /></div>
          {
            optionState && <div className='mobile-message-dropdown'>
            <div className='mobile-message-dropdown--item' onClick={() => makeCall()}><img src='/img/person-add-outline.svg' /> <span>Add member</span></div>
            <div className='mobile-message-dropdown--item' onClick={() => makePhoneCall()}><img src='/img/phone-call-outline.svg' /> <span>Make call</span></div>
            <div className='mobile-message-dropdown--item' onClick={() => makePhoneCall()}><img src='/img/video-outline.svg' /> <span>Video call</span></div>
            </div>
          }
        </div>
        <MessageSlot />
      </div>
    </>
  )
}

export default MobileMessage
