import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import useHideOnClick from '../../../utils/useHideOnClick'

const LessonActions = ({ id }) => {
  const history = useHistory()
  const [actionActive, setActionActive] = useState(false)
  const [tests, setTests] = useState([])
  const domNode = useHideOnClick(() => {
    setActionActive(false)
  })

  useEffect(() => {
    getTests()
  }, [])

  async function getTests () {
    const { data: { tests } } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/tests/lesson/${id}`)
    setTests(tests)
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
          <li>Delete</li>
          {
            tests.length > 0
              ? <Link to={`/admin/edit-test/${id}`}>
                <li>Edit test</li>
                </Link>
              : <Link to={`/admin/add-test/${id}`}>
                <li>Add test</li>
                </Link>
          }
        </ul>
      )}
    </div>
  )
}

export default LessonActions
