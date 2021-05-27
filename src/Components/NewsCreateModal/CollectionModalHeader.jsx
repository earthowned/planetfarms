import './news-create-modal.css'

const CollectionModalHeader = ({
  title,
  setVideoActive,
  setImageActive,
  setTextActive,
  setGroupActive,
  setEnterpriseActive,
  setGroupEditActive,
  setResourceActive
}) => {
  switch (title) {
    case 'Add video':
      return (
        <div className='collection-modal-header'>
          <h4>{title}</h4>
          <Image
            src='/img/close-outline.svg'
            alt='close-icon'
            onClick={() => setVideoActive(false)}
          />
        </div>
      )
      break

    case 'Create Group':
      return (
        <div className='collection-modal-header'>
          <h4>{title}</h4>
          <Image
            src='/img/close-outline.svg'
            alt='close-icon'
            onClick={() => setGroupActive(false)}
          />
        </div>
      )
      break

    case 'Create Resource':
      return (
        <div className='collection-modal-header'>
          <h4>{title}</h4>
          <Image
            src='/img/close-outline.svg'
            alt='close-icon'
            onClick={() => setResourceActive(false)}
          />
        </div>
      )
      break

    case 'Edit Group':
      return (
        <div className='collection-modal-header'>
          <h4>{title}</h4>
          <Image
            src='/img/close-outline.svg'
            alt='close-icon'
            onClick={() => setGroupEditActive(false)}
          />
        </div>
      )
      break

    case 'Create Enterprises':
      return (
        <div className='collection-modal-header'>
          <h4>{title}</h4>
          <Image
            src='/img/close-outline.svg'
            alt='close-icon'
            onClick={() => setEnterpriseActive(false)}
          />
        </div>
      )
      break

    case 'Add photo':
      return (
        <div className='collection-modal-header'>
          <h4>{title}</h4>
          <Image
            src='/img/close-outline.svg'
            alt='close-icon'
            onClick={() => setImageActive(false)}
          />
        </div>
      )

    default:
      return (
        <div className='collection-modal-header'>
          <h4>{title}</h4>
          <Image
            src='/img/close-outline.svg'
            alt='close-icon'
            onClick={() => setTextActive(false)}
          />
        </div>
      )
      break
  }
}

export default CollectionModalHeader

const Image = (props) => {
  return (
    <>
      <img src={props.src} alt={props.alt} onClick={props.onClick} />
    </>
  )
}
