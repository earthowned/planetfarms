import React, {useEffect} from 'react'
import './courses-card.css'

const data = [
    {
        title: "Find your inner power",
        author: "J.McBell course",
        image: "/img/bg-image1.svg",
        stars: 3,
        total: 13,
        added: false,
        enroll: false,
        cost: 25.99,
    },
    {
        title: "Find your inner power",
        author: "J.McBell course",
        image: "/img/bg-image2.svg",
        stars: 4.5,
        total: 5,
        added: false,
        enroll: false,
        cost: "Free"
    },
    {
        title: "Find your inner power",
        author: "J.McBell course",
        image: "/img/bg-image1.svg",
        stars: 4,
        total: 13,
        added: false,
        enroll: false,
        cost: 25.99,
    },
    {
        title: "Find your inner power",
        author: "J.McBell course",
        image: "/img/bg-image2.svg",
        stars: 1,
        total: 5,
        added: false,
        enroll: false,
        cost: 55
    },
    {
        title: "Find your inner power",
        author: "J.McBell course",
        image: "/img/bg-image1.svg",
        stars: 3,
        total: 13,
        added: false,
        enroll: false,
        cost: "Free",
    },
    {
        title: "Find your inner power",
        author: "J.McBell course",
        image: "/img/bg-image1.svg",
        stars: 3,
        total: 13,
        added: false,
        enroll: false,
        cost: "Free",
    }
]
const CoursesCard = ({category}) => {
   
    return (
        <div className="courses-card-container">
            <h4>{category}</h4>
            <div>
            {
                data.map(item => {
                    return (
                        <div className="courses-card" key={item.title} style={{
                            background: `linear-gradient(359.99deg, #000000 0.01%, rgba(25, 28, 33, 0.4) 99.99%), url(${item.image})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            }}>
                            <button className="collection-btn" onClick={() => console.log(!item.added)}>{item.added 
                            ? <><img src="/img/close-outline.svg" alt="close icon"/><span>Remove from collection</span></>
                            : <><img src="/img/plus.svg" alt="add icon"/><span>Add to collection</span></>
                            }
                            </button>
                            <div className="card-content">
                                <h3>{item.title}</h3>
                                <h3>{item.author}</h3>
                                <div className="course-stars">
                                    <Star num={item.stars}/>
                                    <p>({item.total} total)</p>
                                </div>
                                <div className="enroll-container">
                                    <button className="join-btn" onClick={() => console.log(item.total)}>{item.enroll 
                                    ? <span>You're subscriber</span>
                                    : <span>Join Course</span>
                                    }</button>
                                    <h4>{item.cost === 'Free' ? item.cost : `$ ${item.cost}`}</h4>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default CoursesCard

function Star ({num}) {
    return (
        <>
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" 
            fill={num < 6 && num > 0? "#00C688" : "#fff"} stroke={num < 6 && num > 0? "#00C688" : "#fff"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" 
            fill={num < 6 && num > 1? "#00C688" : "#fff"} stroke={num < 6 && num > 1? "#00C688" : "#fff"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" 
            fill={num < 6 && num > 2? "#00C688" : "#fff"} stroke={num < 6 && num > 2? "#00C688" : "#fff"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" 
            fill={num < 6 && num > 3? "#00C688" : "#fff"} stroke={num < 6 && num > 3? "#00C688" : "#fff"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" 
            fill={num < 6 && num > 4? "#00C688" : "#fff"} stroke={num < 6 && num > 4? "#00C688" : "#fff"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </>
    )
}