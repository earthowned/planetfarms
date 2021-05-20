import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import '../CollectionModal/collection-modal.css'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createGroup } from '../../actions/communityGroupActions'
import { createEnterprise } from '../../actions/enterpriseAction'
import CollectionModalHeader from '../NewsCreateModal/CollectionModalHeader'
import DragDrop from '../NewsCreateModal/DragDrop'

const GroupFromModal = ({ setActive, openAddCollection }) => {
  const [files, setFiles] = useState()
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
      dispatch(
        createGroup({ title: groupTitle, description: groupDescription })
      )
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
    // const newEnterprise = {title:enterpriseTitle,description:enterpriseD}
    if (enterpriseTitle && enterpriseDescription) {
      dispatch(
        createEnterprise({
          title: enterpriseTitle,
          description: enterpriseDescription
        })
      )
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
          {pathname === '/community-group' && (
            <>
              <CollectionModalHeader
                title='Create Group'
                setGroupActive={setActive}
              />
              <DragDrop
                getInputProps={getInputProps}
                getRootProps={getRootProps}
                files={files}
              />
              <div className='collection-input-container'>
                <InputFields
                  className='default-input-variation'
                  error={groupTitleError}
                  onChange={(e) => groupTitleChange(e)}
                  placeholder='Group title'
                />
                <ErrorText
                  className='error-message'
                  Error={groupTitleError}
                  message='Group Title'
                />
                <br />
                <InputFields
                  className='default-input-variation text-area-variation'
                  error={groupDescriptionError}
                  onChange={(e) => groupDescriptionChange(e)}
                  placeholder='Group description'
                />
                <ErrorText
                  className='error-message'
                  Error={groupDescriptionError}
                  message='Group Description'
                />
                <br />
                <select className='default-input-variation'>
                  <option>Select category</option>
                  <option>Farmer</option>
                  <option>Mentor</option>
                  <option>Business</option>
                </select>
              </div>
              <SubmitButton className='default-btn btn-size' onClick={handleAddGroup} title='Submit' />
            </>
          )}

          {pathname === '/enterprises' && (
            <>
              <CollectionModalHeader
                title='Create Enterprises'
                setEnterpriseActive={setActive}
              />
              <DragDrop
                getInputProps={getInputProps}
                getRootProps={getRootProps}
                files={files}
              />
              <div className='collection-input-container'>
                <InputFields
                  type='text'
                  placeholder='Enterprise Title'
                  onChange={(e) => enterpriseTitleChange(e)}
                  className='default-input-variation'
                  error={enterpriseTitleError}
                />

                <ErrorText
                  className='error-message'
                  Error={enterpriseTitleError}
                  message='Enterprise Title'
                />

                <br />
                <InputFields
                  className='default-input-variation text-area-variation'
                  placeholder='Enterprise description'
                  error={enterpriseDescriptionError}
                  onChange={(e) => enterpriseDescriptionChange(e)}
                />
                <ErrorText
                  className='error-message'
                  Error={enterpriseDescriptionError}
                  message='Enterprise Description'
                />
                <select className='default-input-variation'>
                  <option>Select category</option>
                  <option>Farmers</option>
                </select>
              </div>
              <div style={{ display: 'flex' }}>
                <SubmitButton className='default-btn btn-size' onClick={handleAddEnterprise} title='Submit' />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default GroupFromModal

const InputFields = (props) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={props.className}
        error={props.error}
      />
    </>
  )
}

const ErrorText = (props) => {
  return (
    <>
      <p className={props.className}>
        {props.Error ? `Please enter ${props.message}` : ''}
      </p>
    </>
  )
}

const SubmitButton = (props) => {
  return (
    <>
      <button className={props.className} onClick={props.onClick}>
        {props.title}
      </button>
    </>
  )
}
