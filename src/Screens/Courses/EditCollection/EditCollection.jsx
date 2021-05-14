import React from 'react'
import BackButton from '../../../Components/BackButton/BackButton'
import Button from '../../../Components/Button/Button';
import Secondarybtn from '../../../Components/SecondaryBtn/Secondarybtn';
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout';
import './edit-collection.css';

const travelling = [
    {
        title: "Jimmy Bean personal business course",
        subscribers: 563,
        cost: 40,
        img: "/img/farmer.svg"
    },
    {
        title: "Hourses farming and business",
        subscribers: 163,
        cost: 40,
        img: "/img/farmer.svg"
    },
    {
        title: "Farming in 2020 with COVID",
        subscribers: 1563,
        cost: 40,
        img: "/img/farmer.svg"
    },
    {
        title: "Jimmy Bean personal business course",
        subscribers: 563,
        cost: 40,
        img: "/img/farmer.svg"
    },
    {
        title: "Hourses farming and business",
        subscribers: 163,
        cost: 40,
        img: "/img/farmer.svg"
    },
    {
        title: "Farming in 2020 with COVID",
        subscribers: 1563,
        cost: 40,
        img: "/img/farmer.svg"
    },
]

const EditCollection = () => {
    return (
        <DashboardLayout title="Travelling courses for Students ">
            <BackButton />
            <div className="edit-collection-container">
                {
                    travelling.map(item => {
                        return (
                            <EditCollectionCard item={item} />
                        )
                    })
                }
            </div>
        </DashboardLayout>
    )
}

const EditCollectionCard = ({item}) => {
    return (
        <div>
             <div className="edit-course-left">
                <div className="edit-course-image-container">
                    <img src={item.img} alt={item.title} />
                </div>
                <div className="edit-course-text-container">
                 <div>
                     <h4>{item.title}</h4>
                     <h6>{item.subscribers} subscribers</h6>
                 </div>
                    <h5>$ {item.cost}</h5>
                </div>
            </div>
            <div className="edit-course-btn-container">
                <Secondarybtn name="Add to my collection" />
                <Button name="Go to course" />
            </div>
        </div>
    )
}

export default EditCollection
