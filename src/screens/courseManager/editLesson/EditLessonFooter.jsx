import { useHistory } from 'react-router-dom'

const EditLessonFooter = ({ onClick, id }) => {
  const history = useHistory()
  return (
    <div className='save-lesson-modal'>
      <h4>Do you want to edit lesson?</h4>
      <div>
        <button
          className='secondary-btn autoWidth'
          id='lesson-cancel-btn'
          onClick={() => history.push(`/admin/course/${id}`)}
        >
          Cancel
        </button>
        <button
          className='primary-btn secondary-btn autoWidth'
          id='lesson-save-btn'
          onClick={onClick}
        >
          Edit Lesson
        </button>
      </div>
    </div>
  )
}

export default EditLessonFooter
