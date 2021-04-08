import React from 'react'
import './news-add-modal.css'
import {Link} from 'react-router-dom';

const NewsAddModal = () => {
    return (
            <div className="news-modal-container">
                <div className="news-modal-inner-container">
                    <div className="news-modal-header">
                        <h4>Add news</h4>
                        <img src="/img/close-outline.png" alt="close-icon" />
                    </div>
                    <div className="news-modal-content">
                        <input className="modal-input" placeholder="News Title" /><br />
                        <select className="modal-input">
                            <option>News Category</option>
                            <option>Sports</option>
                            <option>Business</option>
                        </select>
                    </div>
                    <Link className="nav-link" to="/community-page-news/add-news"><button className="default-btn btn-variation">Continue</button></Link>
                </div>
            </div>
    )
}

export default NewsAddModal
