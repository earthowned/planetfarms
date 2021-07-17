import Actions from '../../screens/courseManager/addLesson/Actions'
import './Image.scss'

const Image = ({ src, desc, onRemove, id }) => {
  return (
    <>
      {src ? (
        <div className='imgPreview'>
          <img src={src} alt={`lesson_${src}_img`} />
          <p>{desc && `"${desc}"`}</p>
          <Actions onRemove={onRemove} id={id} />
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Image
