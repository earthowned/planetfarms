import './Image.scss'

const Image = ({ src, desc }) => {
  return (
    <>
      {src ? (
        <div className='imgPreview'>
          <img src={src} alt={`lesson_${src}_img`} />
          <p>{desc && `"${desc}"`}</p>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Image
