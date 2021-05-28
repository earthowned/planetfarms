import './news-create-modal.css'

const CollectionModalHeader = ({
  title,
  clickHandler
}) => {
  return (
    <>
    <div className='collection-modal-header'>
            <h4>{title}</h4>
            <img
              src='/img/close-outline.svg'
              alt='close-icon'
              onClick={() => clickHandler(false)}
            />
        </div>
    </>
  )
}

export default CollectionModalHeader
