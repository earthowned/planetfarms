import './NewsCreateModal.scss'

const CollectionModalHeader = ({
  title,
  clickHandler
}) => {
  return (
    <Image
      title={title}
      src='/img/close-outline.svg'
      alt='close-icon'
      clickHandler={() => clickHandler(false)}
    />
  )
}

export default CollectionModalHeader

const Image = (props) => {
  return (
    <>
      <div className='collection-modal-header'>
        <h4>{props.title}</h4>
        <img
          src={props.src} alt={props.alt} onClick={props.clickHandler}
        />
      </div>
    </>
  )
}
