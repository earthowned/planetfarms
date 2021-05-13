import React from 'react'
import { useHistory } from 'react-router';
import Button from '../Button/Button'
import Secondarybtn from '../SecondaryBtn/Secondarybtn';
import "./purchase-modal.css"

function ModalContainer ({children, name, clickHandler}) {
  return (
      <div className='purchase-modal-container'>
        <div className='purchase-modal'>
          <div className='purchase-modal-header'>
            <h3>{name}</h3>
            <button onClick={() => clickHandler(false)}><img src='/img/close-outline.svg' alt='close-outline' /></button>
          </div>
          {children}
        </div>
      </div>
  )
}

export const PurchaseModal = ({clickHandler, setPurchaseSuccessModal}) => {
  function purchaseSuccess () {
    setPurchaseSuccessModal(true);
    clickHandler(false);
  }
    return (
       <>
       <ModalContainer name="Buy a Course" clickHandler={clickHandler}>
          <h4>Choose your favorite payment method:</h4>
         <PurchaseCardContent />
          <img className="or-icon" src="/img/or-icon.svg" alt="or icon"/>
          <div className="payment-option-container">
              <button><img src="/img/stripe.svg" alt="stripe payment" /></button>
              <button><img src="/img/paypal.svg" alt="paypal payment" /></button>
          </div>
          <div>
              <Button name="Buy for $25.99" clickHandler={purchaseSuccess}/>
          </div>
        </ModalContainer>
    </>
    )
}

function PurchaseCardContent () {
  return (
     <div className="purchase-card-content">
        <h4>My cards</h4>
          <div className="card-num">
                  <div>
                  <img src="/img/credit-card.svg" alt="card icon" />
                  <h4>Visa(**1728)</h4>
                  </div>
                  <img src="/img/down-arrow.svg" alt="drop icon" />
          </div>
              <button className="card-add-btn">
                  <img src="/img/plus.svg" alt="add icon"/>
                  <span>Add new card</span>
              </button>
    </div>
  )
}

export const PurchaseSuccessModal = ({ clickHandler }) => {
  const history = useHistory();

  function purchasedCourse () {
    history.push('/mycoursepage')
    clickHandler(false);
  }

  function allCourses () {
    history.push('/courses')
    clickHandler(false);
  }

  return (
    <ModalContainer name="Congratulations" clickHandler={clickHandler}>
        <h4 id="purchase-success-msg">You have successfully bought next course</h4>
       <PurchaseCourseContent />
        <div className="purchase-success-btn-container">
          <Button clickHandler={purchasedCourse} name="Go to course" />
          <Secondarybtn clickHandler={allCourses} name="Back to all courses" />
        </div>
      </ModalContainer>
  )
}

function PurchaseCourseContent () {
  return (
     <div className="purchase-course-content">
          <div>
          <img src="/img/farmer.svg" alt="" />
          </div>
          <div>
            <h4>Jimmy Beam personal business course</h4>
            <h4>Price: $25.99</h4>
          </div>
    </div>
  )
}