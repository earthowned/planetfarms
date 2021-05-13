import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import './collection-modal.css'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createResource } from '../../actions/resourceActions'

const CollectionModal = ({ setActive, openAddCollection }) => {
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
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
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
    const selectedFile = e.target.files[0]
    Object.assign(selectedFile, {
      preview: URL.createObjectURL(selectedFile)
    })
    setFiles(selectedFile)
  }

  return (
    <>
      <div className='collection-modal-container'>
        <div className='collection-modal-inner-container'>
          <div className='collection-modal-header'>
            <h4>{pathname === '/library' ? 'Create Resources' : 'Create Collection'}</h4>
            <img src='/img/close-outline.svg' onClick={() => setActive(false)} alt='close-icon' />
          </div>
          <div className='drag-drop' {...getRootProps()}>
            <input {...getInputProps()} onChange={(e) => fileChange(e)} />
            {(files != null)
              ? <img className='avatar' name='avatar' src={files.preview} alt='files[0].preview' />
              : <h6 className='text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px'>
                Drag and Drop files in this area or Click Here to attach
              </h6>}
          </div>
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
                <select className='default-input-variation' placeholder='Collection title'>
                  <option>Select category</option>
                  <option>Travelling</option>
                </select>
              </div>
              <div className='add-collection' onClick={() => openAddCollection()}><img src='/img/plus.svg' alt='Add Files' /><button>Add files</button></div>
              <button className='default-btn btn-size' onClick={() => openAddCollection()}>Create new collection</button>
            </>}
        </div>
      </div>
    </>
  )
}

export default CollectionModal
