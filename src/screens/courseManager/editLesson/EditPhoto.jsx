import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../../../components/button/Button'
import DragDrop from '../../../components/dragDrop/DragDrop'
import ModelHandler from './ModelHandler'
import ToggleSwitch from '../../../components/toggleSwitch/ToggleSwitch'
import { TextArea } from '../../../components/formUI/FormUI'
import '../../../components/newsCreateModal//NewsCreateModal.scss'

const EditPhoto = ({
  editPhotoModel,
  setEditPhotoModel,
  lessonData,
  setLessonData,
  editId
}) => {
  const { register, handleSubmit } = useForm()
  const [isImgDesc, setIsImgDesc] = useState(true)
  const [lessonImg, setLessonImg] = useState(null)
  const submitLessonImg = ({ photoDescription }) => {
    setLessonData(
      lessonData.map((data) =>
        data.itemId === editId
          ? {
              ...data,
              lessonImg,
              photoDescription
            }
          : data
      )
    )
    setEditPhotoModel(false)
  }
  const editingPhotoData = lessonData.find((photo) => photo.itemId === editId)
  console.log(editingPhotoData)
  useEffect(() => {
    editingPhotoData?.lessonImg && setLessonImg(editingPhotoData?.lessonImg)
  }, [editingPhotoData])
  return (
    <>
      {editPhotoModel && (
        <div className='collection-modal-container addBlock'>
          <div className='block'>
            <div className='collection-modal-inner-container'>
              <ModelHandler
                title='Add photo'
                clickHandler={setEditPhotoModel}
              />
              <DragDrop
                onChange={(img) => setLessonImg(img)}
                text='Drag & Drop photo in this area or Click Here to attach'
                dataImg={lessonImg?.preview}
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

export default EditPhoto
