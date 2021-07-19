import React from 'react'
import DragDrop from '../../../components/dragDrop/DragDrop'
import { ErrorText, TextArea } from '../../../components/formUI/FormUI'
import Video from '../../../components/videoPlayer/Video'
import Image from '../../../components/lessonImage/Image'
import Text from './Text'

const AddContent = ({
  setVideoModal,
  videoModal,
  setImageModal,
  setTextModal,
  setTestModal,
  register,
  errors,
  setLessonCover,
  lessonData,
  onRemove,
  setEditVideoModel,
  modelPopUp
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

      {lessonData &&
        lessonData.map((vid, index) => (
          <div key={index}>
            <Video
              title={vid.videoTitle}
              description={vid.videoDescription}
              url={vid.videoLink || vid.videoResource?.preview}
              thumbnail={vid.videoCover?.preview}
              id={vid.itemId}
              isEditable
              onRemove={onRemove}
              setEditVideoModel={setEditVideoModel}
              modelPopUp={modelPopUp}
            />
            <Image
              src={vid.lessonImg?.preview}
              desc={vid.photoDescription}
              id={vid.itemId}
              onRemove={onRemove}
            />
            <Text
              heading={vid.textHeading}
              desc={vid.textDescription}
              onRemove={onRemove}
              id={vid.itemId}
            />
          </div>
        ))}
      <div className='admin-lesson-create-btn-wrapper'>
        <button className='secondary-btn' onClick={() => setVideoModal(true)}>
          <img src='/img/video-outline.svg' alt='video icon' />{' '}
          <span>Add video</span>
        </button>
        <button className='secondary-btn' onClick={() => setImageModal(true)}>
          <img src='/img/image-outline.svg' alt='image_icon' />
          <span>Add image</span>
        </button>
        <button className='secondary-btn' onClick={() => setTextModal(true)}>
          <img src='/img/text-outline.svg' alt='text icon' />{' '}
          <span>Add text</span>
        </button>
        <button className='secondary-btn' onClick={() => setTestModal(true)}>
          <img src='/img/test-outline.svg' alt='test icon' />{' '}
          <span>Add test</span>
        </button>
      </div>
    </div>
  )
}

export default React.memo(AddContent)
