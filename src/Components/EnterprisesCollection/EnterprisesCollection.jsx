import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import './enterprises-collection.css'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createEnterprise } from '../../actions/enterpriseAction'
import DragDrop from '../NewsCreateModal/DragDrop'

const EnterprisesCollection = ({ setActive, openAddCollection }) => {
  const [files, setFiles] = useState()
  const [title, setEnterpriseTitle] = useState('')
  const [description, setEnterpriseDescription] = useState('')
  const dispatch = useDispatch()
  const [enterpriseTitleError, setEnterpriseTitleError] = useState(false)
  const [categoryId, setCategoryId] = useState('')
  const [enterpriseDescriptionError, setEnterpriseDescriptionError] =
    useState(false)
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

  const enterpriseTitleChange = (e) => {
    setEnterpriseTitle(e.target.value)
    setEnterpriseTitleError(false)
  }

  const enterpriseDescriptionChange = (e) => {
    setEnterpriseDescription(e.target.value)
    setEnterpriseDescriptionError(false)
  }

  const handleAddEnterprise = async (e) => {
    e.preventDefault()
    if (!title) setEnterpriseTitleError(true)
    if (!description) setEnterpriseDescriptionError(true)
    if (title && description) {
      dispatch(createEnterprise({ title, description, category: categoryId, file: files }))
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
            <h4>{pathname === '/enterprises' && 'Create Enterprises'}</h4>
            <img
              src='/img/close-outline.svg'
              onClick={() => setActive(false)}
              alt='close-icon'
            />
          </div>
          <DragDrop getInputProps={getInputProps} getRootProps={getRootProps} files={files} onChange={(e) => fileChange(e)} />
          <div className='collection-input-container'>
            <input
              className='default-input-variation'
              placeholder='Enterprise Title'
              error={enterpriseTitleError}
              onChange={(e) => enterpriseTitleChange(e)}
            />
            <br />
            <textarea
              className='default-input-variation text-area-variation'
              placeholder='Enterprise description'
              required='true'
              cols='3'
              rows='3'
              error={enterpriseDescriptionError}
              onChange={(e) => enterpriseDescriptionChange(e)}
            />
            <select className='default-input-variation' onChange={(e) => setCategoryId(e.target.value)}>
              <option>Select category</option>
              <option>Farmers</option>
              <option>Business</option>
              <option>Mentor</option>
            </select>
          </div>
          <button
            className='default-btn btn-size'
            onClick={handleAddEnterprise}
          >
            Create Enterprises
          </button>
        </div>
      </div>
    </>
  )
}

export default EnterprisesCollection
