import {useState} from 'react'
import './news-add-modal.css'
import {Link} from 'react-router-dom';

const NewsAddModal = () => {
    const [title, setTitle] = useState();
    return (
            <div className="news-modal-container">
                <div className="news-modal-inner-container">
                    <div className="news-modal-header">
                        <h4>Add news</h4>
                        <img src="/img/close-outline.svg" alt="close-icon" />
                    </div>
                    <div className="news-modal-content">
                        <input className="modal-input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="News Title" /><br />
                        <select className="modal-input">
                            <option>News Category</option>
                            <option>Sports</option>
                            <option>Business</option>
                        </select>
                    </div>
                    <Link className="nav-link" to={`/community-page-news/${title}`}><button className="default-btn-btn btn-variation">Continue</button></Link>
                </div>
            </div>
    )
}

export default NewsAddModal
