import { useState } from 'react'
import './collection-modal.css'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createResource } from '../../actions/resourceActions'
import SimpleFilter from '../SimpleFilter/SimpleFilter'
import { collectionFilterData } from '../../constants/sampleData'
import DragDrop from '../DragDrop/DragDrop'

const CollectionModal = ({ setActive, openAddCollection, name }) => {
  const [files, setFiles] = useState()
  const [title, setResourceTitle] = useState('')
  const [description, setResourceDescription] = useState('')
  const dispatch = useDispatch()
  const [resourceTitleError, setResourceTitleError] = useState(false)
  const [resourceDescriptionError, setResourceDescriptionError] = useState(false)
  const { pathname } = useLocation()

  const resourceTitleChange = (e) => {
    setResourceTitle(e.target.value)
    setResourceTitleError(false)
  }

  const resourceDescriptionChange = (e) => {
    setResourceDescription(e.target.value)
    setResourceDescriptionError(false)
  }

  const handleAddResource = async (e) => {
    e.preventDefault()
    if (!title) setResourceTitleError(true)
    if (!description) setResourceDescriptionError(true)
    if (title && description) {
      dispatch(createResource({ title, description, file: files }))
      setActive(false)
    }
  }

  return (
    <>
      <div className='collection-modal-container'>
        <div className='collection-modal-inner-course-container'>
          <div className='collection-modal-header'>
            <h4>{pathname === '/library' ? 'Create Resources' : 'Create Collection'}</h4>
            <img src='/img/close-outline.svg' onClick={() => setActive(false)} alt='close-icon' />
          </div>
          <DragDrop onChange={setFiles} />
          {pathname === '/library'
            ? <>
              <div className='collection-input-container'>
                <input className='default-input-variation' error={resourceTitleError} onChange={(e) => resourceTitleChange(e)} placeholder='Resource title' /><br />
                <input className='default-input-variation text-area-variation' error={resourceDescriptionError} onChange={(e) => resourceDescriptionChange(e)} placeholder='Resource description' /><br />
              </div>
              <button className='default-btn btn-size' onClick={handleAddResource}>Submit</button>
            </>
            : <>
              <div className='collection-input-container'>
                <input className='default-input-variation' placeholder='Collection title' /> <br />
                <SimpleFilter data={collectionFilterData} />
              </div>
              <div className='add-collection' onClick={() => openAddCollection()}><img src='/img/plus.svg' alt='Add Files' /><button>{name || 'Add files'}</button></div>
              <button className='default-btn btn-size' onClick={() => openAddCollection()}>Create new collection</button>
            </>}
        </div>
      </div>
    </>
  )
}

export default CollectionModal
