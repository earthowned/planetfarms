import Actions from '../../screens/courseManager/addLesson/Actions'
import './Image.scss'

const Image = ({
  src,
  desc,
  onRemove,
  id,
  modelPopUp,
  setEditPhotoModel,
  isEditable
}) => {
  const poopUp = () => {
    modelPopUp(id)
    setEditPhotoModel(true)
  }
  
  return (
    <>
      {src ? (
        <div className='imgPreview'>
          <img src={src} alt={`lesson_${src}_img`} />
          <p>{desc && `"${desc}"`}</p>
          {isEditable ? (
            <Actions onRemove={onRemove} id={id} poopUp={poopUp} />
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Image
