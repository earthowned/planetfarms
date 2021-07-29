import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { CATEGORY, GET_THUMBNAIL } from '../../utils/urlConstants'

import { updateCourse } from '../../actions/courseActions'
import useGetFetchData from '../../utils/useGetFetchData'
import DragDrop from '../dragDrop/DragDrop'
import ToggleSwitch from '../toggleSwitch/ToggleSwitch'
import Filter from '../filter/Filter'
import './newCourseCreateModal/NewCourseCreateModal.scss'

const EditCourseModal = ({ isEditCourse, setIsEditCourse, data, refetch }) => {
  const dispatch = useDispatch()
  const [isFree, setIsFree] = useState(data?.data?.isFree)
  const [courseImage, setCourseImage] = useState('')
  const [courseId, setCourseId] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(
    `${data?.data?.category}`
  )
  const [categoryError, setCategoryError] = useState('')

  const { register, errors, handleSubmit } = useForm()

  const { data: res } = useGetFetchData('category', CATEGORY)

  useEffect(() => {
    if (selectedCategory.length !== 0) {
      setCategoryError('')
    }
    setCourseId(data?.data?.id)
  }, [data, selectedCategory])
  console.log(courseId)

  const submitForm = async ({ title, description, price }) => {
    setCategoryError(
      selectedCategory.length === 0 ? 'Please select a category' : ''
    )
    const thumbnail = courseImage
    const category = selectedCategory
    if (category.length !== 0) {
      dispatch(
        updateCourse({
          courseId,
          title,
          description,
          price,
          category,
          thumbnail,
          isFree,
          refetch,
          setIsEditCourse
        })
      )
    }
  }
  return (
    <>
      {isEditCourse && (
        <div className='newCourse newCourse__editCourse'>
          <form className='container' onSubmit={handleSubmit(submitForm)}>
            <div className='header'>
              <h2>Edit course</h2>
              <img
                src='/img/close-outline.svg'
                onClick={() => setIsEditCourse(false)}
                alt='close-icon'
              />
            </div>
            <DragDrop
              onChange={(img) => setCourseImage(img)}
              dataImg={GET_THUMBNAIL + data?.data?.thumbnail}
              text='Drag & Drop image in this area or Click Here to edit course cover image'
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
                defaultValue={data?.data?.title}
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
                defaultValue={data?.data?.description}
              />
              {errors.description && (
                <p className='error'>{errors.description.message}</p>
              )}
              <div className='new-course-toggle'>
                <h4>Free course</h4>
                <ToggleSwitch
                  onClick={() => setIsFree(!isFree)}
                  isFree={isFree}
                />
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
      )}
    </>
  )
}

export default React.memo(EditCourseModal)
