import GroupUsers from '../GroupUsers/GroupUsers'
import SearchComponent from '../SearchComponent/SearchComponent'
import { useSelector, useDispatch } from 'react-redux'
import { listCollections } from '../../actions/collectionActions'
import './group-modal.css'
import { useEffect } from 'react'

const GroupModal = ({
  clickHandler,
  setNewCollection,
  btnName,
  name,
  title
}) => {
  function collectionAdded () {
    setNewCollection(true)
    clickHandler(false)
  }

  const data = useSelector(
    (state) => state.listCollection.collections.collection
  )
  console.log('collection', data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listCollections())
  }, [dispatch])
  return (
    <>
      <div className='group-container'>
        <div className='group-modal'>
          <div className='group-modal-header'>
            <h3>{title}</h3>
            <button onClick={() => clickHandler(false)}>
              <img src='/img/close-outline.svg' alt='close-outline' />
            </button>
          </div>

          <div className='search-bar'>
            <SearchComponent />
          </div>

          <div className='modal-users'>
            <GroupUsers data={data} />
          </div>

          <div className='modal-btn'>
            {btnName === 'add to collections' && (
              <div className='add-collection'>
                <img src='/img/plus.svg' />
                <button>Create new collection</button>
              </div>
            )}
            <button className='default-btn' onClick={() => collectionAdded()}>
              {btnName}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default GroupModal
