import { useState } from 'react'
import './NewsAddModal.scss'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { newsUpdate } from '../../actions/newsActions'

const NewsAddModal = ({ setAddModal, editData, setEditData }) => {
  const [title, setTitle] = useState(editData ? editData.title : '')
  const [category, setCategory] = useState()

  const [titleError, setTitleError] = useState()
  const [categoryError, setCategoryError] = useState()

  const history = useHistory();

  const dispatch = useDispatch()
  const titleChange = (e) => {
    setTitle(e.target.value)
    setTitleError(false)
  }

  const categoryChange = (e) => {
    setCategory(e.target.value)
    setCategoryError(false)
  }

  const editNewsTitle = () => {
    dispatch(newsUpdate({ id: editData.id, title, category }))
    clearInput()
  }

  function clearInput () {
    setEditData(null)
    setAddModal(false)
  }

  return (
    <div className='news-modal-container'>
      <div className='news-modal-inner-container'>
        <div className='news-modal-header'>
          <h4>Add news</h4>
          <img
            src='/img/close-outline.svg' alt='close-icon'
            onClick={clearInput}
          />
        </div>
        <div className='news-modal-content'>
          <input className='modal-input' value={title} onChange={(e) => titleChange(e)} placeholder='News Title' /><br />
          <select className='modal-input' onChange={(e) => categoryChange(e)} value={category}>
            <option>News Category</option>
            <option>Sports</option>
            <option>Business</option>
          </select>
        </div>
        {
          editData
          ? <button className='default-btn-btn btn-variation' onClick={editNewsTitle}>Update</button>
          : <button className='default-btn-btn btn-variation' onClick = {() => history.push({
              pathname: `/community-news/${title}`,
              state: {
                category
              }
            })}>Continue</button>
        }
      </div>
    </div>
  )
}

export default NewsAddModal
