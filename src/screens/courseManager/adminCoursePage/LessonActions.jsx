import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import useHideOnClick from '../../../utils/useHideOnClick'

const LessonActions = ({ id }) => {
  const history = useHistory()
  const [actionActive, setActionActive] = useState(false)
  const domNode = useHideOnClick(() => {
    setActionActive(false)
  })
  return (
    <div className='actions' ref={domNode}>
      <button
        className='secondary-btn lesson-btn'
        onClick={() => setActionActive(!actionActive)}
      >
        <img src='/img/more-horizontal.svg' alt='horizontal icon' />
      </button>
      {actionActive && (
        <ul className={actionActive ? 'show' : 'hide'}>
          <Link to={`/admin/edit-lesson/${id}`}>
            <li>Edit</li>
          </Link>
          <li>Delete</li>
        </ul>
      )}
    </div>
  )
}

export default LessonActions
