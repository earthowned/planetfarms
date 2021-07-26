import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../button/Button'
import DragDrop from '../dragDrop/DragDrop'
import CollectionModalHeader from './CollectionModalHeader'
import { TextArea } from '../formUI/FormUI'

import './NewsCreateModal.scss'
import ToggleSwitch from '../toggleSwitch/ToggleSwitch'

const CreateImage = ({
  imageActive,
  setImageActive,
  lessonData,
  setLessonData
}) => {
  const [isImgDesc, setIsImgDesc] = useState(true)
  const [lessonImg, setLessonImg] = useState(null)

  const { register, handleSubmit } = useForm()

  const submitLessonImg = ({ photoDescription }) => {
    const imgData = [
      ...lessonData,
      {
        lessonImg,
        photoDescription,
        isImgDesc
      }
    ]
    setLessonData(imgData)
    setImageActive(false)
  }
  return (
    <>
      {imageActive && (
        <div className='collection-modal-container addBlock'>
          <div className='block'>
            <div className='collection-modal-inner-container'>
              <CollectionModalHeader
                title='Add photo'
                clickHandler={setImageActive}
              />
              <DragDrop
                onChange={(img) => setLessonImg(img)}
                fileType='image/png,image/jpeg,image/jpg'
                text='Drag & Drop photo in this area or Click Here to attach'
              />
              <div className='description'>
                <label>Add photo description ?</label>{' '}
                <ToggleSwitch
                  onClick={() => setIsImgDesc(!isImgDesc)}
                  isFree={isImgDesc}
                />
              </div>
              {isImgDesc && (
                <div className='photo-input-container'>
                  <TextArea
                    placeholder='Photo Description (Optional)'
                    className='default-input-variation text-area-variation textarea'
                    cols='3'
                    rows='3'
                    name='photoDescription'
                    ref={register}
                  />
                </div>
              )}

              <Button
                name='Add Photo Block'
                onClick={handleSubmit(submitLessonImg)}
                className='add'
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateImage
