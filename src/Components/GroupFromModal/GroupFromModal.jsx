import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import '../CollectionModal/collection-modal.css'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createGroup } from '../../actions/communityGroupActions'
import DragDrop from '../NewsCreateModal/DragDrop'

const GroupFromModal = ({ setActive, openAddCollection }) => {
  const [files, setFiles] = useState()
  const [title, setGroupTitle] = useState('')
  const [description, setGroupDescription] = useState('')
  const [categoryId, setCategoryId] = useState('')

  const dispatch = useDispatch()
  const [groupTitleError, setGroupTitleError] = useState(false)
  const [groupDescriptionError, setGroupDescriptionError] = useState(false)
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

  const groupTitleChange = (e) => {
    setGroupTitle(e.target.value)
    setGroupTitleError(false)
  }

  const groupDescriptionChange = (e) => {
    setGroupDescription(e.target.value)
    setGroupDescriptionError(false)
  }

  const handleAddGroup = async (e) => {
    e.preventDefault()
    if (!title) setGroupTitleError(true)
    if (!description) setGroupDescriptionError(true)
    if (title && description) {
      dispatch(createGroup({ title, description, category: categoryId, file: files }))
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
            <h4>{pathname === '/community-group' && 'Create Groups'}</h4>
            <img src='/img/close-outline.svg' onClick={() => setActive(false)} alt='close-icon' />
          </div>
          <DragDrop getInputProps={getInputProps} getRootProps={getRootProps} files={files} onChange={(e) => fileChange(e)} />
          <div className='collection-input-container'>
            <input className='default-input-variation' error={groupTitleError} onChange={(e) => groupTitleChange(e)} placeholder='Group title' /><br />
            <input className='default-input-variation text-area-variation' error={groupDescriptionError} onChange={(e) => groupDescriptionChange(e)} placeholder='Group description' /><br />
            <select className='default-input-variation' onChange={(e) => setCategoryId(e.target.value)}>
              <option>Select category</option>
              <option>Farmer</option>
              <option>Mentor</option>
              <option>Business</option>
            </select>
          </div>
          <button className='default-btn btn-size' onClick={handleAddGroup}>Submit</button>

        </div>
      </div>
    </>
  )
}

export default GroupFromModal
