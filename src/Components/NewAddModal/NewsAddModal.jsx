import { useState } from 'react'
import './news-add-modal.css'
import { Link } from 'react-router-dom'

const NewsAddModal = ({ setAddModal }) => {
  const [title, setTitle] = useState()
  const [category, setCategory] = useState()

  const [titleError, setTitleError] = useState()
  const [categoryError, setCategoryError] = useState()

  const titleChange = (e) => {
    setTitle(e.target.value)
    setTitleError(false)
  }

  const categoryChange = (e) => {
    setCategory(e.target.value)
    setCategoryError(false)
  }

  return (
    <div className='news-modal-container'>
      <div className='news-modal-inner-container'>
        <div className='news-modal-header'>
          <h4>Add news</h4>
          <img
            src='/img/close-outline.svg' alt='close-icon'
            onClick={() => setAddModal(false)}
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
        <Link className='nav-link' to={`/community-page-news/${title}/${category}`}><button className='default-btn-btn btn-variation'>Continue</button></Link>
      </div>
    </div>
  )
}

export default NewsAddModal
