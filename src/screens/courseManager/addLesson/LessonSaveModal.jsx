import { useHistory } from 'react-router-dom'

const LessonSaveModal = ({ pathId, onClick, name }) => {
  const history = useHistory()
  return (
    <div className='save-lesson-modal'>
      <h4>Do you want to {name}?</h4>
      <div>
        <button
          className='secondary-btn'
          id='lesson-cancel-btn'
          onClick={() => history.push(`/admin/course/${pathId}`)}
        >
          Cancel
        </button>
        <button
          className='primary-btn secondary-btn'
          id='lesson-save-btn'
          onClick={onClick}
        >
          {name}
        </button>
      </div>
    </div>
  )
}
export default LessonSaveModal
