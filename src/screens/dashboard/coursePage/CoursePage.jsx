<<<<<<< HEAD:src/screens/dashboard/coursePage/CoursePage.jsx
import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import BackButton from '../../../components/backButton/BackButton'
import Button from '../../../components/button/Button'
import CourseDescription from '../../../components/myCoursesCard/courseDescription/CourseDescription'
import { PurchaseModal, PurchaseSuccessModal } from '../../../components/purchaseModal/PurchaseModal'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import './CoursePage.scss'
import { GET_COURSE } from "../../../utils/urlConstants";
import useGetFetchData from "../../../utils/useGetFetchData";

function MyCoursePage({ unpaid }) {
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [purchaseModal, setPurchaseModal] = useState(false);
  const [purchaseSuccessModal, setPurchaseSuccessModal] = useState(false);

  let { id } = useParams();
  const { data } = useGetFetchData("singleCourse", GET_COURSE + "/" + id);

  return (
    <>
      {feedbackModal && <FeedbackModal setFeedbackModal={setFeedbackModal} />}
      {purchaseModal && (
        <PurchaseModal
          clickHandler={setPurchaseModal}
          setPurchaseSuccessModal={setPurchaseSuccessModal}
        />
      )}
      {purchaseSuccessModal && (
        <PurchaseSuccessModal clickHandler={setPurchaseSuccessModal} />
      )}
      <DashboardLayout title="Course Page">
        <CoursePage
          setFeedbackModal={setFeedbackModal}
          unpaid={unpaid}
          setPurchaseModal={setPurchaseModal}
          data={data}
        />
      </DashboardLayout>
    </>
  );
}
export default MyCoursePage;

function CoursePage({ setFeedbackModal, unpaid, setPurchaseModal, data }) {
  return (
    <div className='course-page'>
      <div className='course-page-flex-col-4'>
        <BackButton location='/mycourse' />
        <CourseDescription
          setFeedbackModal={setFeedbackModal}
          unpaid={unpaid}
          setPurchaseModal={setPurchaseModal}
          data={data}
        />
      </div>
    </div>
  );
}

const FeedbackModal = ({ setFeedbackModal }) => {
  return (
    <div className="feedback-modal-container">
      <div className="feedback-modal">
        <div className="feedback-modal-header">
          <h3>Add my feedback</h3>
          <img
            onClick={() => setFeedbackModal(false)}
            src="/img/close-outline.svg"
            alt="close-icon"
          />
        </div>
        <div className="feedback-modal-rating">
          <h4>Choose rating</h4>
          <Star />
        </div>
        <div className="feedback-modal-review">
          <h4>Review text</h4>
          <textarea />
        </div>
        <div className="feedback-modal-btn-container">
          <Button
            clickHandler={() => setFeedbackModal(false)}
            name="Submit review"
          />
        </div>
      </div>
    </div>
  );
};

function Star({ num }) {
  const stars = [0, 1, 2, 3, 4];
  return (
    <div className="stars">
      {stars.map((item, index) => {
        return (
          <svg
            key={index}
            width="25"
            height="25"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="star"
              d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
              fill={num < 6 && num > item ? "#00C688" : "#191b1d"}
              stroke="#00C688"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      })}
    </div>
  );
}
