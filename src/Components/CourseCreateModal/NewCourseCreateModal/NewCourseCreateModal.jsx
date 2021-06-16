import { useState } from 'react'
import { useHistory } from 'react-router'
import { useForm } from 'react-hook-form'
import { useQueries, useQuery } from 'react-query'

import { Axios, CATEGORY } from '../../../utils/urlConstants'

import DragDrop from '../../DragDrop/DragDrop'
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch'
import './newCourseCreateModal.scss'

const NewCourseCreateModal = ({ collectionAdded, clickHandler }) => {
  const history = useHistory()
  const [active, setActive] = useState(false)
  const [courseImage, setCourseImage] = useState('')

  const { register, errors, handleSubmit } = useForm()

  const {
    isLoading,
    data: res,
    error
  } = useQuery('category', async () => {
    const { data } = await Axios.get(CATEGORY)
    return data
  })

  // TODO: remove this comment after page not found component is created
  // error && history.push("/pagenotfound")

  // const createFunc = () => {-
  //   history.push("/admin/coursepage");
  //   clickHandler(false);
  // };

  const submitForm = (data) => {
    const courseImg = courseImage?.preview
    console.log(data)
    console.log(courseImg)
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
          <p className='error'>{errors.title && errors.title.message}</p>
          <select
            name='category'
            className={
              errors.category
                ? 'input input-select errorBox'
                : 'input input-select'
            }
            placeholder='Select Category*'
            ref={register({
              required: 'You must select Category'
            })}
          >
            <option selected value='' disabled>
              Select Category
            </option>
            {res?.results.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <p className='error'>{errors.category && errors.category.message}</p>

          <textarea
            className={errors.desc ? 'errorBox' : ''}
            placeholder='Course description'
            name='desc'
            ref={register({
              required: {
                value: true,
                message: 'You must add description'
              }
            })}
          />
          <p className='error'>{errors.desc && errors.desc.message}</p>
          <div className='new-course-toggle'>
            <h4>Free course</h4>
            <ToggleSwitch onClick={() => setActive(!active)} active={active} />
          </div>
          {!active && (
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
          <p className='error'>{errors.price && errors.price.message}</p>
        </div>
        <button className='default-btn btn-size'>Create course</button>
      </form>
    </div>
  )
}

export default NewCourseCreateModal
