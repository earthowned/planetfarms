import { useState } from 'react'

const ListViewCardComponent = ({ item, modalActive, setModalActive }) => {
  const [active, setActive] = useState(false)
  return (
    <div key={item.id} className='listview-inner-container'>
      <div>
        <div className='image-wrapper'>
          <img
            src={process.env.REACT_APP_CDN_BASE_URL + '/file/' + item.filename}
            alt='item.title'
          />
        </div>
        <div className='list-content'>
          <h4>{item.title}</h4>
          <p>{item.category}</p>
        </div>
      </div>
      <div className='list-btn-wrapper'>
        <span>Add to</span>
        <button
          className='secondary-btn-border btn-img-wrapper'
          onClick={() => setActive(!active)}
        >
          {active ? (
            <>
              <img src='./img/checkmark-outline.svg' alt='Added' />{' '}
              <h4>Added</h4>
            </>
          ) : (
            <>
              <img src='./img/book.svg' alt='My library' /> <h4>My library</h4>
            </>
          )}
        </button>
        <button
          className='secondary-btn-border'
          onClick={() => setModalActive(!modalActive)}
        >
          Collections
        </button>
      </div>
    </div>
  )
}

export default ListViewCardComponent