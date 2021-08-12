import React from 'react'
import DragDrop from '../../../components/dragDrop/DragDrop'
import { ErrorText, TextArea } from '../../../components/formUI/FormUI'
import ContentAdd from '../../../components/contentAdd/ContentAdd'

const AddContent = ({
  setVideoModal,
  videoModal,
  setImageModal,
  setTextModal,
  register,
  errors,
  setLessonCover,
  lessonData,
  onRemove,
  setEditVideoModel,
  modelPopUp,
  setEditTextModel,
  setEditPhotoModel
}) => {
  return (
    <div className='admin-lesson-create-container'>
      <ErrorText
        className='errorMsg'
        message={errors.title && errors.title.message}
      />
      <input
        type='text'
        placeholder='Write Title Here'
        name='title'
        ref={register({
          required: {
            value: true,
            message: 'You must enter lesson title'
          }
        })}
      />

      <TextArea
        className='default-input-variation text-area-variation lessonDesc'
        placeholder='Lesson Description'
        cols='3'
        rows='4'
        name='lessonDesc'
        ref={register}
      />

      <DragDrop onChange={(img) => setLessonCover(img)} />
      <ContentAdd data={lessonData}  setVideoModal={setVideoModal} setImageModal={setImageModal} setTextModal={setTextModal}/>
    </div>
  )
}

export default React.memo(AddContent)
