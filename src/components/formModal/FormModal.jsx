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
import { useForm } from 'react-hook-form'

const FromModal = ({ setActive, openAddCollection, data, setData }) => {
  const [files, setFiles] = useState()
  
  const { id } = useParams()
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const { register: regi, errors, handleSubmit } = useForm()
 
  const handleAddGroup = async ({groupName, category, description}) => {
    if(groupName && description) {
      dispatch(
        createGroup({
          title: groupName,
          category,
          description,
          file: files
        })
      )
        setActive(false)
    }
    }

  const handleEditGroup = async ({groupName, category, description}) => {
    if(groupName && description) {
      dispatch(groupUpdate({
            id: data.id,
            title: groupName,
            category,
            description,
            file: files
          }))
          clearData();
      setActive(false);
    }
  }

  const handleAddEnterprise = async ({enterpriseName, description, category}) => {
    if (enterpriseName && description) {
      dispatch(
        createEnterprise({
          title: enterpriseName,
          description,
          file: files,
          category
        })
      )
      setActive(false)
    }
  }

  const handleEditEnterprise = ({enterpriseName, description, category}) => {
    if(enterpriseName && description) {
      dispatch(enterpriseUpdate({
           id: data.id,
           title: enterpriseName,
           description,
           category,
           file: files
         }))
         clearData();
     setActive(false);
    }
  }

  const clearData = () => {
    setActive(false);
    setData(null);
  }

  return (
    <>
      <div className='collection-modal-container'>
        <div>
          <div className='collection-modal-inner-container'>
            {(pathname === `/community-group/${id}` 
            || pathname === `/your-community-group/${id}`) && (
            <form onSubmit={data ? handleSubmit(handleEditGroup) : handleSubmit(handleAddGroup)}>
                <CollectionModalHeader 
                title={data ? 'Edit Group' : 'Create Group'}
                clickHandler={clearData} />
                <DragDrop files={files} onChange={setFiles} />
                <div className='collection-input-container'>
                  <InputFields
                    type='text'
                    placeholder='Group Name'
                    name='groupName'
                    id='name'
                    defaultValue={data && data.title}
                    ref={regi({
                      required: {
                        value: true,
                        message: 'You must enter the title.'
                      }
                    })}
                    errors={errors}
                  >
                    </InputFields>
                    <InputFields
                      type='text'
                      placeholder='Description'
                      name='description'
                      id='description'
                      defaultValue={data && data.description}
                      ref={regi({
                        required: {
                          value: true,
                          message: 'You must enter the description.'
                        }
                      })}
                      errors={errors}
                    >          
                  </InputFields>
                    <SelectFields
                      option={['Select Category', 'Farmers', 'Business', 'Accounting']}
                      name="category"
                      ref={regi()} 
                      errors={errors}
                          />
                 
                </div>
                <SubmitButton
                  className='default-btn btn-size'
                  title={data ? 'Edit Group' : 'Submit'}
                />
              </form>
            )}

            {(
            pathname === `/enterprises/${id}` ||
            pathname === `/your-enterprises/${id}`
            ) && (
             <form onSubmit={data ? handleSubmit(handleEditEnterprise) : handleSubmit(handleAddEnterprise)}>
                <CollectionModalHeader 
                title={data ? 'Edit Group' : 'Create Group'}
                clickHandler={clearData} />
                <DragDrop files={files} onChange={setFiles} />
                <div className='collection-input-container'>
                  <InputFields
                    type='text'
                    placeholder='Enterprise Name'
                    name='enterpriseName'
                    id='enterpriseName'
                    defaultValue={data && data.title}
                    ref={regi({
                      required: {
                        value: true,
                        message: 'You must enter the title.'
                      }
                    })}
                    errors={errors}
                  >
                    </InputFields>
                    <InputFields
                      type='text'
                      placeholder='Description'
                      name='description'
                      id='description'
                      defaultValue={data && data.description}
                      ref={regi({
                        required: {
                          value: true,
                          message: 'You must enter the description.'
                        }
                      })}
                      errors={errors}
                    >          
                  </InputFields>
                    <SelectFields
                      option={['Select Category', 'Farmers', 'Business', 'Accounting']}
                      name="category"
                      ref={regi()} 
                      errors={errors}
                          />
                 
                </div>
                <SubmitButton
                  className='default-btn btn-size'
                  title={data ? 'Edit Enterprise' : 'Submit'}
                />
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default FromModal
