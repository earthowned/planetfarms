import React, { useState } from 'react'
import useHideOnClick from '../../../utils/useHideOnClick'

const LessonActions = () => {
  const [actionActive, setActionActive] = useState(false)

  let domNode = useHideOnClick(() => {
    setActionActive(false)
  })
  return (
    <div className="actions" ref={domNode}>
      <button
        className="secondary-btn lesson-btn"
        onClick={() => setActionActive(!actionActive)}
      >
        <img src="/img/more-horizontal.svg" alt="horizontal icon" />
      </button>
      {actionActive && (
        <ul className={actionActive ? 'show' : 'hide'}>
          <li>Edit</li>
          <li>Delete</li>
        </ul>
      )}
    </div>
  )
}

export default LessonActions
