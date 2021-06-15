import { useState } from 'react'
import { useHistory } from 'react-router'
import { useForm } from 'react-hook-form'
import DragDrop from '../../dragDrop/DragDrop'
import ToggleSwitch from '../../toggleSwitch/ToggleSwitch'
import './NewCourseCreateModal.scss'

const NewCourseCreateModal = ({ collectionAdded, clickHandler }) => {
  const history = useHistory()
  const [active, setActive] = useState(false)

  const { register, errors, handleSubmit } = useForm()

  // const createFunc = () => {
  //   history.push("/admin/coursepage");
  //   clickHandler(false);
  // };

  const submitForm = (data) => {
    console.log(data)
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
        <DragDrop />
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
            <option value='Farming'>Farming</option>
            <option value='Farming'>Farming</option>
            <option value='Travelling'>Travelling</option>
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
