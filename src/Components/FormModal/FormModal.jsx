import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import '../CollectionModal/collection-modal.css'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createGroup } from '../../actions/communityGroupActions'
import { createEnterprise } from '../../actions/enterpriseAction'

const GroupFromModal = ({ setActive, openAddCollection }) => {
  const [files, setFiles] = useState([])
  const [roleActive, setRoleActive] = useState(false)
  const [groupTitle, setGroupTitle] = useState('')
  const [groupDescription, setGroupDescription] = useState('')
  const [groupTitleError, setGroupTitleError] = useState(false)
  const [groupDescriptionError, setGroupDescriptionError] = useState(false)

  const [enterpriseTitle, setEnterpriseTitle] = useState('')
  const [enterpriseDescription, setEnterpriseDescription] = useState('')
  const [enterpriseTitleError, setEnterpriseTitleError] = useState(false)
  const [enterpriseDescriptionError, setEnterpriseDescriptionError] = useState(false)

  const dispatch = useDispatch()

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
    if (!groupTitle) setGroupTitleError(true)
    if (!groupDescription) setGroupDescriptionError(true)
    if (groupTitle && groupDescription) {
      dispatch(createGroup({ title: groupTitle, description: groupDescription }))
      setActive(false)
    }
  }

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
    if (!enterpriseTitle) setEnterpriseTitleError(true)
    if (!enterpriseDescription) setEnterpriseDescriptionError(true)
    console.log(enterpriseTitle, enterpriseDescription)
    if (enterpriseTitle && enterpriseDescription) {
      dispatch(createEnterprise({ title: enterpriseTitle, description: enterpriseDescription }))
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
            <h4>{pathname === '/community-group' && 'Create Groups' || pathname === '/enterprises' && 'Create Enterprises'}</h4>
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

          {pathname === '/community-group' &&
            <>
              <div className='collection-input-container'>
                <input className='default-input-variation' error={groupTitleError} onChange={(e) => groupTitleChange(e)} placeholder='Group title' />
                <p className='error-message'>{groupTitleError ? 'Please enter Group Title' : ' '} </p>
                <br />

                <input className='default-input-variation text-area-variation' error={groupDescriptionError} onChange={(e) => groupDescriptionChange(e)} placeholder='Group description' />
                <p className='error-message'>{groupDescriptionError ? 'Please enter Group Description' : ' '} </p>
                <br />
                <select className='default-input-variation'>
                  <option>Select category</option>
                  <option>Farmer</option>
                  <option>Mentor</option>
                  <option>Business</option>
                </select>
              </div>
              <button className='default-btn btn-size' onClick={handleAddGroup}>Submit</button>
            </>}

          {pathname === '/enterprises' &&
            <>
              <div className='collection-input-container'>
                <input
                  className='default-input-variation'
                  placeholder='Enterprise Title'
                  error={enterpriseTitleError}
                  onChange={(e) => enterpriseTitleChange(e)}
                />
                <p className='error-message'>{enterpriseTitleError ? 'Please enter Enterprise Title' : ' '} </p>
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
                <p className='error-message'>{enterpriseDescriptionError ? 'Please enter Enterprise Description' : ' '} </p>
                <select className='default-input-variation'>
                  <option>Select category</option>
                  <option>Farmers</option>
                </select>
              </div>

              <div style={{ display: 'flex' }}>
                <button className='default-btn btn-size' onClick={handleAddEnterprise}>
                  Create Enterprise
                </button>
              </div>
            </>}

        </div>
      </div>

    </>
  )
}

export default GroupFromModal
