import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import './enterprises-collection.css'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createEnterprise } from '../../actions/enterpriseAction'

const EnterprisesCollection = ({ setActive, openAddCollection }) => {
  const [files, setFiles] = useState([])
  const [title, setEnterpriseTitle] = useState('')
  const [description, setEnterpriseDescription] = useState('')
  const dispatch = useDispatch()
  const [enterpriseTitleError, setEnterpriseTitleError] = useState(false)
  const [enterpriseDescriptionError, setEnterpriseDescriptionError] = useState(
    false
  )
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
      dispatch(createEnterprise({ title, description }))
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
            <h4>{pathname === '/enterprises' && 'Create Enterprises'}</h4>
            <img
              src='/img/close-outline.svg'
              onClick={() => setActive(false)}
              alt='close-icon'
            />
          </div>
          <div className='drag-drop' {...getRootProps()}>
            <input {...getInputProps()} onChange={(e) => fileChange(e)} />
            {files.length > 0 ? (
              <img
                className='avatar'
                name='avatar'
                src={files[0].preview}
                alt='files[0].preview'
              />
            ) : (
              <h6 className='text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px'>
                Drag and Drop files in this area or Click Here to attach
              </h6>
            )}
          </div>
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
            <select className='default-input-variation'>
              <option>Select category</option>
              <option>Farmers</option>
            </select>
          </div>
          <button className='default-btn btn-size' onClick={handleAddEnterprise}>
            Create Enterprises
          </button>
        </div>
      </div>
    </>
  )
}

export default EnterprisesCollection
