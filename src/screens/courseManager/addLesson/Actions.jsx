import React, { useState } from 'react'
import useHideOnClick from '../../../utils/useHideOnClick'
const LessonActions = ({ id, onRemove = () => {}, poopUp, refetch }) => {
  const [actionActive, setActionActive] = useState(false)

  const domNode = useHideOnClick(() => {
    setActionActive(false)
  })

  const openCloseModal = () => {
    poopUp()
    setActionActive(!actionActive)
  }

  return (
    <div className='actions lessonAction' ref={domNode}>
      <button
        className='secondary-btn lesson-btn'
        onClick={() => setActionActive(!actionActive)}
      >
        <img src='/img/more-horizontal.svg' alt='horizontal icon' />
      </button>
      {actionActive && (
        <ul className={actionActive ? 'actionBtn show' : 'hide'}>
          <li
            onClick={openCloseModal}
          >
            Edit
          </li>
          <li onClick={() => onRemove(id)}>Delete</li>
        </ul>
      )}
    </div>
  )
}

export default LessonActions
