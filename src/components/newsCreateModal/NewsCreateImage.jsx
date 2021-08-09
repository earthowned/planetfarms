import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../button/Button'
import DragDrop from '../dragDrop/DragDrop'
import CollectionModalHeader from './CollectionModalHeader'
import { TextArea } from '../formUI/FormUI'

import './NewsCreateModal.scss'
import ToggleSwitch from '../toggleSwitch/ToggleSwitch'
import { LESSON_IMG } from '../../utils/urlConstants'
import { useEffect } from 'react'

const CreateImage = ({
  imageActive,
  setImageActive,
  lessonData,
  setLessonData,
  data = [],
  editFunc
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

  const editNewsImg = ({ photoDescription }) => {
    const imgData = [
      ...lessonData,
      {
        lessonImg,
        photoDescription,
        isImgDesc
      }
    ]
    editFunc({id: data[0].id, lessonImg, photoDescription, isImgDesc})
  }

  useEffect(() => {
    if(data.length > 0) {
      setIsImgDesc(data[0].isImgDesc)
    }
  }, [])
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
                text='Drag & Drop photo in this area or Click Here to attach'
                dataImg={data.length > 0 && `${LESSON_IMG}${data[0].lessonImg}`}
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
                    defaultValue={data.length > 0 ? data[0].photoDescription : ''}
                    placeholder='Photo Description (Optional)'
                    className='default-input-variation text-area-variation textarea'
                    cols='3'
                    rows='3'
                    name='photoDescription'
                    ref={register}
                  />
                </div>
              )}

              {
                data.length > 0 
                ? <Button
                    className='add'
                    name='Edit Photo Block'
                    onClick={handleSubmit(editNewsImg)} />
                : <Button
                    className='add'
                    name='Add Video Block'
                    onClick={handleSubmit(submitLessonImg)} />
              }
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateImage
