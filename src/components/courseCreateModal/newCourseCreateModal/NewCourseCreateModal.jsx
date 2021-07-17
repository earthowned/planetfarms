import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { CATEGORY } from '../../../utils/urlConstants'

import { createResource } from '../../../actions/courseActions'
import useGetFetchData from '../../../utils/useGetFetchData'
import DragDrop from '../../dragDrop/DragDrop'
import ToggleSwitch from '../../toggleSwitch/ToggleSwitch'
import './NewCourseCreateModal.scss'
import Filter from '../../filter/Filter'

const NewCourseCreateModal = ({ collectionAdded, clickHandler }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [isFree, setIsFree] = useState(true)
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
    if (category.length !== 0) {
      dispatch(
        createResource({
          title,
          category,
          description,
          price,
          thumbnail,
          isFree,
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
        <DragDrop onChange={(img) => setCourseImage(img)} />
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
          <div className='new-course-toggle'>
            <h4>Free course</h4>
            <ToggleSwitch onClick={() => setIsFree(!isFree)} isFree={isFree} />
          </div>
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
        </div>
        <button className='default-btn btn-size'>Create course</button>
      </form>
    </div>
  )
}

export default React.memo(NewCourseCreateModal)
