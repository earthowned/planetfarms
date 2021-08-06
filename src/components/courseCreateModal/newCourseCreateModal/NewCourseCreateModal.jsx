import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { CATEGORY } from '../../../utils/urlConstants'

import { createResource } from '../../../actions/courseActions'
import useGetFetchData from '../../../utils/useGetFetchData'
import DragDrop from '../../dragDrop/DragDrop'
import ToggleDiv from './ToggleDiv'
import './NewCourseCreateModal.scss'
import Filter from '../../filter/Filter'

const NewCourseCreateModal = ({ clickHandler }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const community = useSelector((state) => state.activeCommunity)
  console.log(community)
  const { userInfo } = userLogin
  const [isFree, setIsFree] = useState(true)
  const [isForCommunity, setIsForCommunity] = useState(true)
  const [courseImage, setCourseImage] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [categoryError, setCategoryError] = useState('')

  const { register, errors, handleSubmit } = useForm()

  const { data: res } = useGetFetchData('category', CATEGORY)

  useEffect(() => {
    if (selectedCategory.length !== 0) {
      setCategoryError('')
    }
  }, [selectedCategory])

  const submitForm = async ({ title, description, price }) => {
    setCategoryError(
      selectedCategory.length === 0 ? 'Please select a category' : ''
    )
    const thumbnail = courseImage
    const creator = userInfo.id
    const category = selectedCategory
    const isPublic = !isForCommunity
    const communityId = community?.currentCommunity?.id
    if (category.length !== 0) {
      dispatch(
        createResource({
          title,
          category,
          description,
          price,
          thumbnail,
          isFree,
          isPublic,
          communityId,
          creator,
          history
        })
      )
    }
  }
  return (
    <div className='newCourse'>
      <form className='container' onSubmit={handleSubmit(submitForm)}>
        <div className='header'>
          <h2>Usual course</h2>
          <img
            src='/img/close-outline.svg'
            onClick={() => clickHandler(false)}
            alt='close-icon'
          />
        </div>
        <DragDrop
          onChange={(img) => setCourseImage(img)}
          fileType='image/png,image/jpeg,image/jpg'
          text='Drag & Drop course image or click here to attach image'
        />
        <div className='inputContainer'>
          <input
            className={errors.title ? 'input errorBox' : 'input'}
            placeholder='Course title*'
            name='title'
            ref={register({
              required: {
                value: true,
                message: 'You must enter course title'
              }
            })}
          />
          {errors.title && <p className='error'>{errors.title.message}</p>}
          <Filter
            isCategory
            category={res?.results}
            className='categoryFilter'
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          {categoryError && <p className='error'>{categoryError}</p>}

          <textarea
            className={errors.description ? 'errorBox' : ''}
            placeholder='Course description'
            name='description'
            ref={register({
              required: {
                value: true,
                message: 'You must add description'
              }
            })}
          />
          {errors.description && (
            <p className='error'>{errors.description.message}</p>
          )}
          <ToggleDiv
            placeholder='Free course ?'
            state={isFree}
            setState={setIsFree}
          />
          {!isFree && (
            <input
              type='number'
              name='price'
              className={errors.price ? 'input errorBox' : 'input'}
              placeholder='Course price'
              ref={register({
                required: {
                  value: true,
                  message: 'You must enter price'
                }
              })}
            />
          )}
          {errors.price && <p className='error'>{errors.price.message}</p>}
          <ToggleDiv
            placeholder='Only for Community Member ?'
            state={isForCommunity}
            setState={setIsForCommunity}
          />
        </div>
        <button className='default-btn btn-size'>Create course</button>
      </form>
    </div>
  )
}

export default React.memo(NewCourseCreateModal)
