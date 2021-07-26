import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { deleteLesson } from '../../../actions/lessonActions'
import { useDispatch } from 'react-redux'
import useHideOnClick from '../../../utils/useHideOnClick'

const LessonActions = ({ id, refetch }) => {
  const dispatch = useDispatch()
  const [actionActive, setActionActive] = useState(false)
  const domNode = useHideOnClick(() => {
    setActionActive(false)
  })
  const deleteLessonHandler = (lessonId) => {
    dispatch(deleteLesson(lessonId, refetch))
  }
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
          <li
            onClick={() => {
              deleteLessonHandler(id)
              setActionActive(!actionActive)
            }}
          >
            Delete
          </li>
        </ul>
      )}
    </div>
  )
}

export default LessonActions
