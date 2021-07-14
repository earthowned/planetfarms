import { useForm } from 'react-hook-form'

import Button from '../button/Button'
import CollectionModalHeader from './CollectionModalHeader'
import { InputFields, ErrorText, TextArea } from '../formUI/FormUI'
import './NewsCreateModal.scss'

const CreateText = ({
  textActive,
  setTextActive,
  placeholder,
  lessonData,
  setLessonData
}) => {
  const { register, errors, handleSubmit } = useForm()

  const addText = ({ textHeading, textDescription }) => {
    const textData = [
      ...lessonData,
      {
        textHeading,
        textDescription
      }
    ]
    setLessonData(textData)
    setTextActive(false)
  }
  return (
    <>
      {textActive && (
        <div className='collection-modal-container addBlock addBlock__text'>
          <div className='block'>
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
                  className='default-input-variation text-area-variation textarea'
                  placeholder='Text description'
                  cols='3'
                  rows='7'
                  name='textDescription'
                  ref={register}
                />
              </div>
              <Button
                className='add'
                name='Add Text block'
                onClick={handleSubmit(addText)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateText
