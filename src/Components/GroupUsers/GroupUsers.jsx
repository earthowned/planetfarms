import React from 'react'
import Radiobox from '../Radiobox/Radiobox'
import './group-users.css'

const GroupUsers = ({ data }) => {
  return (
    <>
      {

       data && data.map(d => (
         <div className='group-user-container'>
           <div>
             <div className='img-wrapper'>
               <img src='/img/avatar-msg.svg' alt='users' />
             </div>
             <h4>{d.name && d.name}</h4>
           </div>
           <Radiobox />
         </div>
       ))
      }

    </>
  )
}

export default GroupUsers
