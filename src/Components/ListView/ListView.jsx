import { useState } from 'react'
import './listview.css'

const ListView = ({data, title, setNewCollection, setModalActive, modalActive}) => {
    const [ active, setActive] = useState(false);

    return (
        <>
            <div className="listview-container">
                <h4>{title}</h4>
                {data && data.map(item => {
                    return (
                        <div key={item.id} className="listview-inner-container">
                            <div className="image-wrapper">
                                <img src={item.img} alt="item.title" />
                            </div>
                            <div className="list-content">
                                <h4>{item.title}</h4>
                                <p>{item.category}</p>
                            </div>
                            <div className="list-btn-wrapper">
                                <span>Add to</span>
                                <button className="secondary-btn-border btn-img-wrapper" onClick={() => setActive(!active)}>
                                    {active ? (<><img src="./img/checkmark-outline.svg" alt="Added" /> <span>Added</span></>) : (<><img src="./img/book.svg" alt="My library" /> <span>My library</span></>)}
                                </button>
                                <button className="secondary-btn-border" onClick={() => setModalActive(!modalActive)}>Collections</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ListView
