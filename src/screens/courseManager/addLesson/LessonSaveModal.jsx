const LessonSaveModal = ({ onClick }) => {
  return (
    <div className='save-lesson-modal'>
      <h4>Do you want to save lesson?</h4>
      <div>
        <button className='secondary-btn' id='lesson-cancel-btn'>
          Cancel
        </button>
        <button
          className='primary-btn secondary-btn'
          id='lesson-save-btn'
          onClick={onClick}
        >
          Save lesson
        </button>
      </div>
    </div>
  )
}
export default LessonSaveModal
