import {useState} from 'react'
import './listview.css';
import GroupModal from '../GroupModal/GroupModal';

const groupCollection = [
    {
        image: "./img/user.png",
        name: "My favorite collection",
        active: false,
    },
    {
        image: "./img/user2.png",
        name: "Travelling collection",
        active: true,
    },
    {
        image: "./img/user-2.png",
        name: "Business Collection #1",
        active: true,
    },
    {
        image: "./img/user.png",
        name: "Files for beginners",
        active: false,
    },
    {
        image: "./img/user-2.png",
        name: "Farming Collection",
        active: false,
    },
    {
        image: "./img/user.png",
        name: "Be Creative!",
        active: false,
    },
]
const ListView = ({data, title}) => {
    const [ active, setActive] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    return (
        <>
        {modalActive && <GroupModal clickHandler={setModalActive} data={groupCollection} btnName="add to collections"/>}
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
