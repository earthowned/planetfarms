import React, { useEffect, useLayoutEffect, useState } from 'react'
import DragDrop from '../../../components/dragDrop/DragDrop'
import { ErrorText, TextArea } from '../../../components/formUI/FormUI'
import Video from '../../../components/videoPlayer/Video'
import Image from '../../../components/lessonImage/Image'
import Text from './Text'
import BtnCollection from '../../../components/btnCollection/BtnCollection'

const AddContent = ({
  setVideoModal,
  setImageModal,
  setTextModal,
  register,
  errors,
  setLessonCover,
  lessonData
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
      <BtnCollection data={lessonData}  setVideoModal={setVideoModal} setImageModal={setImageModal} setTextModal={setTextModal}/>
    </div>
  )
}

export default AddContent
