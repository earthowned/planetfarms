const SaveModal = ({ onClick, name, cancel }) => {
  return (
    <div className='save-lesson-modal'>
      <h4>Do you want to {name}?</h4>
      <div>
        <button
          className='secondary-btn'
          id='lesson-cancel-btn'
          onClick={cancel}
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

export default SaveModal
