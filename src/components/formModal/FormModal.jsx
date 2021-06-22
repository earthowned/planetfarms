import { useState, useEffect } from 'react'
import './FormModal.scss'
import '../enterprisesCollection/EnterprisesCollection.scss'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createGroup, groupUpdate } from '../../actions/communityGroupActions'
import { createEnterprise, enterpriseUpdate } from '../../actions/enterpriseAction'
import CollectionModalHeader from '../newsCreateModal/CollectionModalHeader'
import { InputFields, SelectFields, ErrorText, SubmitButton } from '../formUI/FormUI'
import DragDrop from '../dragDrop/DragDrop'
import axios from 'axios'

const FromModal = ({ setActive, openAddCollection, data }) => {
  const [files, setFiles] = useState()

  const [roleActive, setRoleActive] = useState(false)
  const [groupTitle, setGroupTitle] = useState(data ? data.title : '')
  const [groupDescription, setGroupDescription] = useState(data ? data.description : '')
  const [categoryId, setCategoryId] = useState(data ? data.category : '')
  const [groupTitleError, setGroupTitleError] = useState(false)
  const [groupDescriptionError, setGroupDescriptionError] = useState(false)

  const [enterpriseTitle, setEnterpriseTitle] = useState(data ? data.title : '')
  const [enterpriseDescription, setEnterpriseDescription] = useState(data ? data.description : '')
  const [enterpriseTitleError, setEnterpriseTitleError] = useState(false)
  const [enterpriseDescriptionError, setEnterpriseDescriptionError] = useState(false)

  const { id } = useParams()
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

  const handleEditGroup = async (e) => {
    e.preventDefault();
    dispatch(groupUpdate({
          id: data.id,
          title: groupTitle,
          category: categoryId,
          description: groupDescription,
          file: files
        }))
    setActive(false);
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

  const handleEditEnterprise = (e) => {
    e.preventDefault();
     dispatch(enterpriseUpdate({
          id: data.id,
          title: enterpriseTitle,
          description: enterpriseDescription,
          file: files
        }))
    setActive(false);
  }

  return (
    <>
      <div className='collection-modal-container'>
        <div>
          <div className='collection-modal-inner-container'>
            {pathname === `/community_group/${id}` && (
              <>
                <CollectionModalHeader title='Create Group' clickHandler={setActive} />
                <DragDrop files={files} onChange={setFiles} />
                <div className='collection-input-container'>
                  <InputFields
                    className='default-input-variation'
                    error={groupTitleError}
                    onChange={(e) => groupTitleChange(e)}
                    placeholder='Group title'
                    value={groupTitle}
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
                    value={groupDescription}
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
                  onClick={data ? handleEditGroup : handleAddGroup}
                  title={data ? 'Edit Group' : 'Submit'}
                />
              </>
            )}

            {pathname === `/enterprises/${id}` && (
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
                    value={enterpriseTitle}
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
                    value={enterpriseDescription}
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
                    onClick={data ? handleEditEnterprise : handleAddEnterprise}
                    title={data ? 'Edit Enterprise' : 'Submit'}
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
