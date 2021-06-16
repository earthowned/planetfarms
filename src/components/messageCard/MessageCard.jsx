import React from 'react'
import { useHistory } from 'react-router'
import useSizeFinder from '../../utils/sizeFinder'
import './MessageCard.scss'

function TextBlock ({ contact }) {
  return (
    <div className='contact-text'>
      <h4>{contact?.name}</h4>
      <p>{contact?.message}</p>
    </div>
  )
}

const MessageCard = ({ contact, clickHandler, profileSettings, setModalActive, clickProfileHandler }) => {
  const history = useHistory()
  const windowWidth = useSizeFinder()

  return (
    <>
      {profileSettings ? (
        <button className='last-contact-card' onClick={() => clickProfileHandler(contact)}>
          <TextBlock contact={contact} />
        </button>
      ) : (
        <button
          className='contact-card'
          key={contact.name}
          onClick={() => (windowWidth > 850 ? clickHandler(true) : history.push(`/messenger/${contact.name}`))}
        >
          <div className='img-wrapper'>
            <img src={contact?.img} alt='contact' />
          </div>
          <TextBlock contact={contact} />
          <div className='contact-noti'>
            <span>{contact?.date}</span>
            <div className='noti'>2</div>
          </div>
        </button>
      )}
    </>
  )
}

export default MessageCard
