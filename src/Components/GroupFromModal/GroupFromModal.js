import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import '../CollectionModal/collection-modal.css'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createGroup } from '../../actions/communityGroupActions'

const GroupFromModal = ({ setActive, openAddCollection }) => {
  const [files, setFiles] = useState([])
  const [title, setGroupTitle] = useState('')
  const [description, setGroupDescription] = useState('')
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
      dispatch(createGroup({ title, description }))
      setActive(false)
    }
  }

  const fileChange = (e) => {
    setFiles(e.target.files[0])
  }

  return (
    <>
      <div className='collection-modal-container'>
        <div className='collection-modal-inner-container'>
          <div className='collection-modal-header'>
            <h4>{pathname === '/community-group' && 'Create Groups'}</h4>
            <img src='/img/close-outline.svg' onClick={() => setActive(false)} alt='close-icon' />
          </div>
          <div className='drag-drop' {...getRootProps()}>
            <input {...getInputProps()} onChange={(e) => fileChange(e)} />
            {files.length > 0
              ? <img className='avatar' name='avatar' src={files[0].preview} alt='files[0].preview' />
              : <h6 className='text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px'>
                Drag and Drop files in this area or Click Here to attach
              </h6>}
          </div>

          <div className='collection-input-container'>
            <input className='default-input-variation' error={groupTitleError} onChange={(e) => groupTitleChange(e)} placeholder='Group title' /><br />
            <input className='default-input-variation text-area-variation' error={groupDescriptionError} onChange={(e) => groupDescriptionChange(e)} placeholder='Group description' /><br />
            <select className='default-input-variation'>
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
