import React, { useState } from 'react'
import useHideOnClick from '../../../utils/useHideOnClick'
const LessonActions = ({ id, onRemove = () => {}, poopUp }) => {
  const [actionActive, setActionActive] = useState(false)

  const domNode = useHideOnClick(() => {
    setActionActive(false)
  })

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
          <li onClick={poopUp}>Edit</li>
          <li onClick={() => onRemove(id)}>Delete</li>
        </ul>
      )}
    </div>
  )
}

export default LessonActions
