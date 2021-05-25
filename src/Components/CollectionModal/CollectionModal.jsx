import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import './collection-modal.css'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createResource } from '../../actions/resourceActions'
import SimpleFilter from '../SimpleFilter/SimpleFilter'
import { collectionFilterData } from '../../constants/sampleData'
import { File } from '../FormUI/FormUI'
import CollectionModalHeader from '../NewsCreateModal/CollectionModalHeader'
import DragDrop from '../NewsCreateModal/DragDrop'

const CollectionModal = ({ setActive, openAddCollection, name }) => {
  const [files, setFiles] = useState()
  const [title, setResourceTitle] = useState('')
  const [description, setResourceDescription] = useState('')
  const dispatch = useDispatch()
  const [resourceTitleError, setResourceTitleError] = useState(false)
  const [resourceDescriptionError, setResourceDescriptionError] = useState(false)
  const { pathname } = useLocation()
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )

      setFiles(acceptedFiles[0])
    }
  })

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

  const fileChange = (e) => {
    const selectedFile = e.target.files[0];
    <File selectedFile={selectedFile} />
    setFiles(selectedFile)
  }

  return (
    <>
      <div className='collection-modal-container'>
        <div className='collection-modal-inner-course-container'>
          <CollectionModalHeader
              title='Create Resource'
              setResourceActive={setActive}
            />
          <DragDrop
              getInputProps={getInputProps}
              getRootProps={getRootProps}
              files={files}
              onChange={(e) => fileChange(e)}
            />
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
