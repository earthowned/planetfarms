import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../button/Button'
import DragDrop from '../dragDrop/DragDrop'
import CollectionModalHeader from './CollectionModalHeader'
import { TextArea } from '../formUI/FormUI'

import './NewsCreateModal.scss'

const CreateImage = ({
  imageActive,
  setImageActive,
  lessonData,
  setLessonData
}) => {
  const [isImgDesc, setIsImgDesc] = useState(false)
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
  console.log(isImgDesc)

  return (
    <>
      {imageActive && (
        <div className='collection-modal-container'>
          <div>
            <div className='collection-modal-inner-container'>
              <CollectionModalHeader
                title='Add photo'
                clickHandler={setImageActive}
              />
              <DragDrop onChange={(img) => setLessonImg(img)} />

              <div className='photo-input-container'>
                <TextArea
                  placeholder='Enter image description'
                  className='default-input-variation text-area-variation textarea'
                  cols='3'
                  rows='7'
                  name='photoDescription'
                  ref={register}
                  onChange={(e) => setIsImgDesc(!!e.target.value)}
                />
              </div>

              <Button
                name='Add block'
                onClick={handleSubmit(submitLessonImg)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateImage
