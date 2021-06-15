import React from 'react';
import './cabinet-user-info.css'
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import { Link } from 'react-router-dom';
import BackButton from '../../Components/BackButton/BackButton';


function App() {
  return (
    <DashboardLayout title="My Profile">
      <CabinetUserInfo />
    </DashboardLayout>
  );
}
export default App;

function CabinetUserInfo() {
  return (
    <div className="payment-container">
      <div className="payment-flex-col-4">
          <BackButton location={"/dashboard"} />
        {/* user details form comes here */}
        <div className="payment-card-container border-1px-onyx">
          <div className="payment-info">
            <div className="payment-info-card border-0-5px-white">
              <div className="payment-information ibmplexsans-semi-bold-shark-16px">Payment information</div>
            </div>
            <div className="payment-info-card-2 border-0-5px-white">
              <div className="course-reports">Course reports</div>
            </div>
          </div>
          <p className="payment-text ibmplexsans-regular-normal-quarter-spanish-white-16px">
            You can connect these payment services:
          </p>
          <div className="payment-card-container-item">
            <img src="/img/stripe-card.svg" />
            <img src="/img/paypal-card.svg" />
           <img src="/img/coinbase-card.svg" />
          </div>
          <div className="payment-card-container-item">
            <div className="payment-overlap-group">
              <div className="boderline"></div>
              <div className="or-container">
                <div className="or">OR</div>
              </div>
            </div>
          </div>
          <div className="add-card border-0-5px-quarter-spanish-white">
            {/* <div className="frame-1933"></div> */}
            <div className="add-card-container">
              <div className="plus-icon">
                <div className="plus-icon-image">
                  <img src="/img/plus-icon.svg" />
                </div>
              </div>
              <div className="add-my-card valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                Add my card
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}









