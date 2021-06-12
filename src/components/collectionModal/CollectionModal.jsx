import { useState } from 'react'
import '../formModal/FormModal.scss'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createResource } from '../../actions/resourceActions'
import SimpleFilter from '../simpleFilter/SimpleFilter'
import { createCollection } from '../../actions/collectionActions'
import { collectionFilterData } from '../../constants/sampleData'
import CollectionModalHeader from '../newsCreateModal/CollectionModalHeader'
import DragDrop from '../dragDrop/DragDrop'

const CollectionModal = ({ setActive, openAddCollection, name }) => {
  const [files, setFiles] = useState()
  const [title, setResourceTitle] = useState('')
  const [description, setResourceDescription] = useState('')
  const dispatch = useDispatch()
  const [resourceTitleError, setResourceTitleError] = useState(false)
  const [resourceDescriptionError, setResourceDescriptionError] = useState(false)
  const [collectionTitle, setCollectionTitle] = useState('')
  const [collectionTitleError, setCollectionTitleError] = useState(false)

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
  const collectionTitleChange = (e) => {
    setCollectionTitle(e.target.value)
    setCollectionTitleError(false)
  }
  const handleAddCollection = async (e) => {
    e.preventDefault()
    if (!collectionTitle) setCollectionTitleError(true)

    if (collectionTitle) {
      dispatch(createCollection({ name: collectionTitle }))
      setActive(false)
    }
  }

  return (
    <>
      <div className='collection-modal-container'>
        <div>
          <div className='collection-modal-inner-container'>
            <CollectionModalHeader title='Create Resource' clickHandler={setActive} />
            <DragDrop files={files} onChange={setFiles} />
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
                  <input className='default-input-variation' error={collectionTitleError} onChange={(e) => collectionTitleChange(e)} placeholder='Collection title' /> <br />
                  <SimpleFilter data={collectionFilterData} />
                </div>
                <div className='add-collection' onClick={() => openAddCollection()}><img src='/img/plus.svg' alt='Add Files' /><button>{name || 'Add files'}</button></div>
                <button className='default-btn btn-size' onClick={handleAddCollection}>Create new collection</button>
                </>}
          </div>
        </div>
      </div>
    </>
  )
}

export default CollectionModal
