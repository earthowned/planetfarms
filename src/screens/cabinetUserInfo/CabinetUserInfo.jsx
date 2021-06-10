import React from 'react'
import './CabinetUserInfo.scss'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import { Link, userLocation } from 'react-router-dom'
import BackButton from '../../components/backButton/BackButton'
import useSizeFinder from '../../utils/sizeFinder';
import Filter from '../../components/filter/Filter';

const data = [{
  label: 'Payment Information',
  link: '/userinfo'
}, {
  label: 'Course reports',
  link: '/userinfo/reports'
}]

function App () {
  return (
    <DashboardLayout title='My Profile'>
      <CabinetUserInfo />
    </DashboardLayout>
  )
}
export default App

function CabinetUserInfo () {
  const {pathname} = useLocation();
  const windowWidth = useSizeFinder();
  return (
    <div className='payment-container'>
      <div className='payment-flex-col-4'>
        <BackButton location='/dashboard' />
        {/* user details form comes here */}
        <div className='payment-card-container border-1px-onyx'>
          <div className='payment-info'>
          {windowWidth > 600 
            ? <ul className='library-list-container'>
              {data.map((menu) => (
                <li>
                  <Link className={`nav-link ${(pathname === menu.link) ? 'library-list-item active' : 'library-list-item'}`} to={menu.link}>{menu.label}</Link>
                </li>
              ))}
            </ul>
            : <div className="payment-filter-container"> <Filter data={data} noImage="noImage" newFilter />  </div>
          }
          </div>
          <p className='payment-text ibmplexsans-regular-normal-quarter-spanish-white-16px'>
            You can connect these payment services:
          </p>
          <div className='payment-card-container-item'>
            <img src='/img/stripe-card.svg' />
            <img src='/img/paypal-card.svg' />
            <img src='/img/coinbase-card.svg' />
          </div>
          <div className='payment-card-container-item'>
            <div className='payment-overlap-group'>
              <div className='boderline' />
              <div className='or-container'>
                <div className='or'>OR</div>
              </div>
            </div>
          </div>
          <div className='add-card border-0-5px-quarter-spanish-white'>
            {/* <div className="frame-1933"></div> */}
            <div className='add-card-container'>
              <div className='plus-icon'>
                <div className='plus-icon-image'>
                  <img src='/img/plus-icon.svg' />
                </div>
              </div>
              <div className='add-my-card valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px'>
                Add my card
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
