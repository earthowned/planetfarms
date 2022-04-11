import React from "react";
import "./CabinetUserInfo.scss";
import { Link, useLocation } from "react-router-dom";
import { DashboardLayout } from "layout/dashboard";
import BackButton from "../../components/backButton/BackButton";
import useSizeFinder from "../../utils/sizeFinder";
import Filter from "../../components/filter/Filter";

const data = [
  {
    label: "Payment Information",
    link: "/userinfo",
  },
  {
    label: "Course reports",
    link: "/userinfo/reports",
  },
];

function App() {
  return (
    <DashboardLayout title="My Profile">
      <CabinetUserInfo />
    </DashboardLayout>
  );
}
export default App;

function CabinetUserInfo() {
  const { pathname } = useLocation();
  const windowWidth = useSizeFinder();
  return (
    <div className="payment-container">
      <div className="payment-flex-col-4">
        <BackButton location="/dashboard" />
        {/* user details form comes here */}
        <div className="payment-card-container border-1px-onyx">
          <div className="payment-info">
            {windowWidth > 600 ? (
              <ul className="library-list-container">
                {data.map((menu, index) => (
                  <li key={`cabinet-user-info-li-${index.toString()}`}>
                    <Link
                      className={`nav-link ${
                        pathname === menu.link
                          ? "library-list-item active"
                          : "library-list-item"
                      }`}
                      to={menu.link}
                    >
                      {menu.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="payment-filter-container">
                {" "}
                <Filter data={data} noImage="noImage" newFilter />{" "}
              </div>
            )}
          </div>
          <p className="payment-text ibmplexsans-regular-normal-quarter-spanish-white-16px">
            You can connect these payment services:
          </p>
          <div className="payment-option-container user-payment">
            <button type="button">
              <img src="/img/stripe.svg" alt="stripe payment" />
            </button>
            <button type="button">
              <img src="/img/paypal.svg" alt="paypal payment" />
            </button>
            <button type="button">
              <img src="/img/coinbase.svg" alt="coinbase payment" />
            </button>
          </div>
          <div className="or-icon-container">
            <div className="or-icon-line" />
            <span>OR</span>
            <div className="or-icon-line" />
          </div>
          <div className="add-card border-0-5px-quarter-spanish-white">
            {/* <div className="frame-1933"></div> */}
            <div className="add-card-container">
              <div className="plus-icon">
                <div className="plus-icon-image">
                  <img src="/img/plus-icon.svg" alt="" />
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
