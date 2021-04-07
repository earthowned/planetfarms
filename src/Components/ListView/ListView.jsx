import {useState} from 'react'
import './listview.css';

const ListView = ({data, title, setNewCollection, setModalActive, modalActive}) => {
    const [ active, setActive] = useState(false);
    
    return (
        <>
        
        <div className="listview-container">
        <h4>{title}</h4>
           { data.map(item => {
                return (
                    
                    <div key={item.title} className="listview-inner-container">
                        <div className="image-wrapper">
                            <img src={item.img} />
                        </div>
                        <div className="list-content">
                            <h4>{item.title}</h4>
                            <p>{item.category}</p>
                        </div>
                        <div className="list-btn-wrapper">
                            <span>Add to</span>
                            <button className="secondary-btn-border btn-img-wrapper" onClick={() => setActive(!active)}>
                                {active ? (<><img src="./img/checkmark-outline.svg" /> <span>Added</span></>) : (<><img src="./img/book.svg" /> <span>My library</span></>)}    
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
