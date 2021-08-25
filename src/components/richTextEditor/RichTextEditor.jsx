import { useForm } from 'react-hook-form'
import { ErrorText, TextArea } from '../formUI/FormUI'
import DragDrop from '../dragDrop/DragDrop'
import EditContent from '../editContent/EditContent'
import { GET_COVERIMG } from '../../utils/urlConstants'
import ContentAdd from '../contentAdd/ContentAdd'
import LessonMaterial from '../../screens/courseManager/addLesson/LessonMaterial'
import SaveModal from '../saveModal/SaveModal'

const RichTextEditor = ({
  setVideoModal,
  setImageModal,
  setTextModal,
  setCoverImage,
  coverImage,
  formData,
  setFormData,
  editData,
  setEditData,
  removeItem,
  editVideoFunc,
  editImageFunc,
  editTextFunc,
  deleteVideoModalFunc,
  deleteImageModalFunc,
  deleteTextModalFunc,
  editForm,
  submitForm,
  showMaterial,
  material,
  setMaterial,
  removeMaterial,
  edit,
  editBtnName,
  saveBtnName,
  cancel,
  title
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
        setCoverImage={setCoverImage}
        coverImage={coverImage}
        formData={formData}
        setFormData={setFormData}
        editData={editData}
        setEditData={setEditData}
        onRemove={removeItem}
        editVideoFunc={editVideoFunc}
        editImageFunc={editImageFunc}
        editTextFunc={editTextFunc}
        setDeleteVideoModal={deleteVideoModalFunc}
        setDeleteImageModal={deleteImageModalFunc}
        setDeleteTextModal={deleteTextModalFunc}
        saveBtnName={saveBtnName}
        title={title}
      />
      {showMaterial && <LessonMaterial
        material={material}
        setMaterial={setMaterial}
        removeLocalMaterial={removeMaterial}
                       />}

      {
          edit
            ? <SaveModal
                onClick={handleSubmit(editForm)}
                name={editBtnName}
                cancel={cancel}
              />
            : <SaveModal
                onClick={handleSubmit(submitForm)}
                name={saveBtnName}
                cancel={cancel}
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
  setCoverImage,
  formData,
  editData,
  editVideoFunc,
  editTextFunc,
  editImageFunc,
  setDeleteTextModal,
  setDeleteImageModal,
  setDeleteVideoModal,
  saveBtnName,
  title
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
        defaultValue={editData?.title ? editData?.title : title}
      />

      {
        saveBtnName === 'save lesson' && <TextArea
          className='default-input-variation text-area-variation lessonDesc'
          placeholder='Lesson Description'
          cols='3'
          rows='4'
          name='lessonDesc'
          ref={register}
          defaultValue={editData?.lessonDesc || ''}
                                         />
        }

      {
      saveBtnName === 'save lesson'
        ? <DragDrop
            text='Drag & Drop photo in this area or Click Here to attach'
            onChange={(img) => setCoverImage(img)}
            dataImg={editData?.coverImg ? `${GET_COVERIMG}${editData.coverImg}` : ''}
            onClick={() => setCoverImage(null)}
          />
        : <DragDrop
            onChange={(img) => setCoverImage(img)}
            text='Drag & Drop photo in this area or Click Here to attach'
            dataImg={editData?._attachments ? `${process.env.REACT_APP_CDN_BASE_URL}/news/${editData?._attachments}` : ''}
            onClick={() => setCoverImage(null)}
          />
      }
      {
        editData && <EditContent
          data={editData}
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
      <ContentAdd data={formData} setVideoModal={setVideoModal} setImageModal={setImageModal} setTextModal={setTextModal} />
    </div>
  )
}

export default RichTextEditor
