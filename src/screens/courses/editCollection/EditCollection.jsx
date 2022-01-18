import React from "react";
import BackButton from "../../../components/backButton/BackButton";
import Button from "../../../components/button/Button";
import Secondarybtn from "../../../components/secondaryBtn/Secondarybtn";
import DashboardLayout from "../../../layout/dashboardLayout/DashboardLayout";
import "./EditCollection.css";

const travelling = Array(2)
  .fill([
    {
      title: "Jimmy Bean personal business course",
      subscribers: 563,
      cost: 40,
      img: "/img/farmer.svg",
    },
    {
      title: "Hourses farming and business",
      subscribers: 163,
      cost: 40,
      img: "/img/farmer.svg",
    },
    {
      title: "Farming in 2020 with COVID",
      subscribers: 1563,
      cost: 40,
      img: "/img/farmer.svg",
    },
  ])
  .flat();

const EditCollection = () => {
  return (
    <DashboardLayout title="Travelling courses for Students ">
      <BackButton location="/courses/my-courses" />
      <div className="edit-collection-container">
        {travelling.map((item, index) => (
          <EditCollectionCard key={index.toString()} item={item} />
        ))}
      </div>
    </DashboardLayout>
  );
};

const EditCollectionCard = ({ item }) => {
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
        <div>
          <Secondarybtn name="Add to my collection" />
        </div>
        <div>
          <Button name="Go to course" />
        </div>
      </div>
    </div>
  );
};

export default EditCollection;
