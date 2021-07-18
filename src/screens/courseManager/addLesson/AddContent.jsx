import DragDrop from '../../../components/dragDrop/DragDrop'
import { ErrorText, TextArea } from '../../../components/formUI/FormUI'
import Video from '../../../components/videoPlayer/Video'
import Image from '../../../components/lessonImage/Image'
import Text from './Text'

const AddContent = ({
  setVideoModal,
  setImageModal,
  setTextModal,
  register,
  errors,
  setLessonCover,
  lessonData,
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
            message: 'You must enter lesson title',
          },
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
            />
            <Image src={vid.lessonImg?.preview} desc={vid.photoDescription} />
            <Text heading={vid.textHeading} desc={vid.textDescription} />
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
      </div>
    </div>
  )
}

export default AddContent
