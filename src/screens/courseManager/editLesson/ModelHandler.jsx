const ModelHandler = ({ title, clickHandler }) => {
  return (
    <Image
      title={title}
      src='/img/close-outline.svg'
      alt='close-icon'
      clickHandler={clickHandler}
    />
  )
}

const Image = ({ title, src, alt, clickHandler = () => {} }) => {
  return (
    <>
      <div className='collection-modal-header'>
        <h4>{title}</h4>
        <img src={src} alt={alt} onClick={() => clickHandler(false)} />
      </div>
    </>
  )
}

export default ModelHandler
