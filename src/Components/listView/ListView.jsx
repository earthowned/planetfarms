import { useState } from 'react'
import './listview.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createResourceUser } from '../../actions/resourceUserAction'

const ListView = ({ data, title, setNewCollection, setModalActive, modalActive }) => {
  const [active, setActive] = useState(false)
  const [isAdded, setIsAdded] = useState()

  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.userLogin.userInfo.id)

  function clickHandle (id) {
    if (active === false) {
      dispatch(
        createResourceUser({ userId: userInfo, resourceId: id })
      )
    }

    setActive(true)
  }

  return (
    <>
      <div className='listview-container'>
        <h4>{title}</h4>
        {data && data.map((item, index) => {
          return (
            <div key={item.id} className='listview-inner-container'>
              <div className='image-wrapper'>
                <img src={process.env.REACT_APP_CDN_BASE_URL + '/resources/' + item.filename} alt='item.title' />
              </div>
              <div className='list-content'>
                <h4>{item.title}</h4>
                <p>{item.category}</p>
              </div>
              <div className='list-btn-wrapper'>
                <span>Add to</span>
                <button className='secondary-btn-border btn-img-wrapper' value={active} onClick={(id) => clickHandle(item.id)}>
                  {active ? (<><img src='./img/checkmark-outline.svg' alt='Added' /> <span>Added</span></>) : (<><img src='./img/book.svg' alt='My library' /> <span>My library</span></>)}
                </button>
                <button className='secondary-btn-border' onClick={() => setModalActive(!modalActive)}>Collections</button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ListView
