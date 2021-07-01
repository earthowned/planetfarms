import { useState } from 'react'
import { useForm } from 'react-hook-form'
// import { useDispatch } from 'react-redux'
// import { savetextDetail } from '../../actions/newsActions'

import Button from '../button/Button'
import CollectionModalHeader from './CollectionModalHeader'
import { InputFields, ErrorText, TextArea } from '../formUI/FormUI'
import './NewsCreateModal.scss'

const CreateText = ({
  textActive,
  setTextActive,
  placeholder,
  lessonData,
  setLessonData,
  setLessonText
}) => {
  const { register, errors, handleSubmit } = useForm()

  const addText = ({ textHeading, textDescription }) => {
    console.log(textHeading, textDescription)
  }
  return (
    <>
      {textActive && (
        <div className='collection-modal-container'>
          <div>
            <div className='collection-modal-inner-container'>
              <CollectionModalHeader
                title='Add text'
                clickHandler={setTextActive}
              />
              <div className='photo-input-container'>
                <InputFields
                  type='text'
                  className='default-input-variation'
                  placeholder={placeholder}
                  name='textHeading'
                  ref={register({
                    required: {
                      value: true,
                      message: 'Please enter Heading'
                    }
                  })}
                />
                <ErrorText
                  className='errorMsg'
                  message={errors.textHeading && errors.textHeading.message}
                />
                <TextArea
                  className='default-input-variation text-area-variation'
                  placeholder='Text description'
                  cols='3'
                  rows='7'
                  placeholder='Type text here '
                  name='textDescription'
                  ref={register({
                    required: {
                      value: true,
                      message: 'Please enter a text description'
                    }
                  })}
                />
                <ErrorText
                  className='errorMsg'
                  message={
                    errors.textDescription && errors.textDescription.message
                  }
                />
              </div>
              <Button name='Add block' onClick={handleSubmit(addText)} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateText
