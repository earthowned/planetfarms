import { useState } from 'react'
import './FormModal.scss'
import '../enterprisesCollection/EnterprisesCollection.scss'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createGroup } from '../../actions/communityGroupActions'
import { createEnterprise } from '../../actions/enterpriseAction'
import CollectionModalHeader from '../newsCreateModal/CollectionModalHeader'
import { InputFields, SelectFields, ErrorText, SubmitButton } from '../formUI/FormUI'
import DragDrop from '../dragDrop/DragDrop'

const FromModal = ({ setActive, openAddCollection }) => {
  const [files, setFiles] = useState()
  const [roleActive, setRoleActive] = useState(false)
  const [groupTitle, setGroupTitle] = useState('')
  const [groupDescription, setGroupDescription] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [groupTitleError, setGroupTitleError] = useState(false)
  const [groupDescriptionError, setGroupDescriptionError] = useState(false)

  const [enterpriseTitle, setEnterpriseTitle] = useState('')
  const [enterpriseDescription, setEnterpriseDescription] = useState('')
  const [enterpriseTitleError, setEnterpriseTitleError] = useState(false)
  const [enterpriseDescriptionError, setEnterpriseDescriptionError] = useState(false)

  const dispatch = useDispatch()
  const { pathname } = useLocation()
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
        createGroup({
          title: groupTitle,
          category: categoryId,
          description: groupDescription,
          file: files
        })
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
          description: enterpriseDescription,
          file: files,
          category: categoryId
        })
      )
      setActive(false)
    }
  }

  return (
    <>
      <div className='collection-modal-container'>
        <div>
          <div className='collection-modal-inner-container'>
            {pathname === '/community-group' && (
              <>
                <CollectionModalHeader title='Create Group' clickHandler={setActive} />
                <DragDrop files={files} onChange={setFiles} />
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
                  <SelectFields
                    className='default-input-variation'
                    option={['Select Category', 'Farmers', 'Business', 'Accounting']}
                    onClick={(e) => setCategoryId(e.target.value)}
                  />
                </div>
                <SubmitButton
                  className='default-btn btn-size'
                  onClick={handleAddGroup}
                  title='Submit'
                />
              </>
            )}

            {pathname === '/enterprises' && (
              <>
                <CollectionModalHeader
                  title='Create Enterprises'
                  clickHandler={setActive}
                />
                <DragDrop files={files} onChange={setFiles} />
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
                  <SelectFields
                    className='default-input-variation'
                    option={['Select Category', 'Farmers', 'Business']}
                    onClick={(e) => setCategoryId(e.target.value)}
                  />
                </div>
                <div style={{ display: 'flex', marginTop: '18px' }}>
                  <SubmitButton
                    className='default-btn btn-size'
                    onClick={handleAddEnterprise}
                    title='Submit'
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default FromModal
