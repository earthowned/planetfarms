import { useState } from 'react'
import useHideOnClick from '../../../utils/useHideOnClick'

const CourseActions = ({ id }) => {
  const [actionActive, setActionActive] = useState(false)
  const domNode = useHideOnClick(() => {
    setActionActive(false)
  })

  return (
    <div className='actions actions__course' ref={domNode}>
      <button
        className='secondary-btn lesson-btn'
        onClick={() => setActionActive(!actionActive)}
      >
        <img src='/img/more-horizontal.svg' alt='horizontal icon' />
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

export default CourseActions
