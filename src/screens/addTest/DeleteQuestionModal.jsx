const DeleteQuestionModal = ({
  confirmDelete,
  setDeleteModal,
  deleteModal
}) => {
  return (
    <>
      {deleteModal && (
        <div className='simple-modal-container'>
          <div className='simple-modal-inner-container'>
            <div>
              <h4>Are you sure you want to delete?</h4>
            </div>
            <div>
              <button className='secondary-btn' onClick={confirmDelete}>
                Confirm
              </button>
              <button
                className='secondary-btn'
                onClick={() => setDeleteModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default DeleteQuestionModal