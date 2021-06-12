import React from 'react'
import Radiobox from '../Radiobox/Radiobox'
import './group-users.css'

const GroupUsers = ({ data }) => {
  return (
    <>
      {

       data && data.map(user => (
         <div className='group-user-container'>
           <div>
             <div className='img-wrapper'>
               <img src={user.image} alt='users' />
             </div>
             <h4>{user.name && user.name}</h4>
           </div>
           <Radiobox />
         </div>
       ))
      }

    </>
  )
}

export default GroupUsers
