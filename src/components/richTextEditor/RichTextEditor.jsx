import { useParams, useHistory, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import LessonSaveModal from '../../screens/courseManager/addLesson/LessonSaveModal'
import { ErrorText, TextArea } from '../formUI/FormUI'
import DragDrop from '../dragDrop/DragDrop'
import EditContent from '../editContent/EditContent'
import { GET_COVERIMG } from '../../utils/urlConstants'
import ContentAdd from '../contentAdd/ContentAdd'
import LessonMaterial from '../../screens/courseManager/addLesson/LessonMaterial'
import { useEffect, useState } from 'react'


const RichTextEditor = ({
  setVideoModal,
  setImageModal,
  setTextModal,
  setLessonCover,
  lessonCover,
  lessonData,
  setLessonData,
  lessonSingleData,
  setLessonSingleData,
  removeItem,
  editVideoFunc,
  editImageFunc,
  editTextFunc,
  deleteVideoModalFunc,
  deleteImageModalFunc,
  deleteTextModalFunc,
  courseId,
  editLessonForm,
  submitLessonForm,
  showMaterial,
  material,
  setMaterial,
  removeMaterial,
  edit,
  editBtnName,
  saveBtnName
}) => {
  const { register, errors, handleSubmit } = useForm()
  return (
    <>
        <AddContent
          setVideoModal={setVideoModal}
          setImageModal={setImageModal}
          setTextModal={setTextModal}
          register={register}
          errors={errors}
          setLessonCover={setLessonCover}
          lessonCover={lessonCover}
          lessonData={lessonData}
          setLessonData={setLessonData}
          lessonSingleData={lessonSingleData}
          setLessonSingleData={setLessonSingleData}
          onRemove={removeItem}
          editVideoFunc={editVideoFunc}
          editImageFunc={editImageFunc}
          editTextFunc={editTextFunc}
          setDeleteVideoModal={deleteVideoModalFunc}
          setDeleteImageModal={deleteImageModalFunc}
          setDeleteTextModal={deleteTextModalFunc}
          saveBtnName={saveBtnName}
        />
        {showMaterial && <LessonMaterial
          material={material}
          setMaterial={setMaterial}
          removeLocalMaterial={removeMaterial}
        />}

          {
          edit
          ? <LessonSaveModal
          pathId={courseId}
          onClick={handleSubmit(editLessonForm)}
          name={editBtnName}
        />
          : <LessonSaveModal
          pathId={courseId}
          onClick={handleSubmit(submitLessonForm)}
          name={saveBtnName}
        />
        }
    </>
  )
}

const AddContent = ({
  setVideoModal,
  setImageModal,
  setTextModal,
  register,
  errors,
  setLessonCover,
  lessonData,
  lessonSingleData,
  editVideoFunc,
  editTextFunc,
  editImageFunc,
  setDeleteTextModal,
  setDeleteImageModal,
  setDeleteVideoModal,
  saveBtnName
}) => {
  // const [title, setTitle] = useState('');

  //  // for creation
  // useEffect(() => {
  //   if(lessonData.length > 0) {
  //     setTitle(lessonData[0].title)
  //   }
  // }, [lessonData])

  // // for Edit
  // useEffect(() => {
  //   if(lessonSingleData) {
  //     setTitle(lessonSingleData.title)
  //   }
  // }, [lessonSingleData])
  

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
        defaultValue={lessonSingleData?.title || ''}
      />

        {
        saveBtnName === "save lesson"  && <TextArea
            className='default-input-variation text-area-variation lessonDesc'
            placeholder='Lesson Description'
            cols='3'
            rows='4'
            name='lessonDesc'
            ref={register}
            defaultValue={lessonSingleData?.lessonDesc || ''}
          />
        }

      {
      saveBtnName === "save lesson" 
      ? <DragDrop
        text='Drag & Drop photo in this area or Click Here to attach'
        onChange={(img) => setLessonCover(img)} 
        dataImg={lessonSingleData?.coverImg ? `${GET_COVERIMG}${lessonSingleData.coverImg}` : ''}
        onClick={() => setLessonCover(null)}
        />
      : <DragDrop
        onChange={(img) => setLessonCover(img)} 
        text='Drag & Drop photo in this area or Click Here to attach'
        dataImg={lessonSingleData?._attachments ? `${process.env.REACT_APP_CDN_BASE_URL}/news/${lessonSingleData?._attachments}` : ''}
        onClick={() => setLessonCover(null)}
      />
      }
      {
        lessonSingleData && <EditContent 
        data={lessonSingleData}
        setEditPhotoModel={setImageModal}
        setEditTextModel={setTextModal}
        setEditVideoModel={setVideoModal}
        editVideoFunc={editVideoFunc}
        editImageFunc={editImageFunc}
        editTextFunc={editTextFunc}
        removeTextItem={setDeleteTextModal}
        removePhoto={setDeleteImageModal}
        removeVideo={setDeleteVideoModal}
        />
      }
      <ContentAdd data={lessonData}  setVideoModal={setVideoModal} setImageModal={setImageModal} setTextModal={setTextModal}/>
    </div>
  )
}

export default RichTextEditor