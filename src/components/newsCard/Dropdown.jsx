const Dropdown = ({ news, editCard, deleteNewsCard, setDropDown }) => {
  const editNewsCard = (id) => {
    editCard(id)
    setDropDown(false)
  }

  const deleteCard = () => {
    deleteNewsCard(news.id)
    setDropDown(false)
  }
  return (
    <div className='dropdown-card-items'>
      <ul>
        <li onClick={() => editNewsCard(news.id)}>
          <img src='/img/edit-icon.svg' alt='burger icon' /> <span>Edit</span>
        </li>
        <li onClick={() => deleteCard()}>
          <img src='/img/trash-icon.svg' alt='burger icon' />{' '}
          <span>Delete</span>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown
