const AddCollection = ({ item, setModalActive }) => {
  return (
    <button className='collection-btn' onClick={() => setModalActive(true)}>
      {item.added ? (
        <>
          <img src='/img/close-outline.svg' alt='close icon' />
          <span>Remove from collection</span>
        </>
      ) : (
        <>
          <img src='/img/plus.svg' alt='add icon' />
          <span>Add to collection</span>
        </>
      )}
    </button>
  )
}

export default AddCollection
