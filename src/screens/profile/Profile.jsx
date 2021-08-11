import React, { useEffect, useState } from 'react'
import './Profile.scss'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import BackButton from '../../components/backButton/BackButton'
import {
  AdditionalInformation,
  ContactInformation,
  PersonalInformation
} from '../../components/profileFormCard/ProfileFormCard'
import EditInformation from '../../components/editInformation/EditInformation'
import { getMyDetails, getUserDetails } from '../../actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import VerificationModal from '../../components/verificationModal/VerificationModal'
import { useLocation } from 'react-router-dom'

function Profile () {
  const { id } = useParams()
  const { pathname } = useLocation()
  const [showEmailVerificationModal, setShowEmailVerificationModal] = useState(false)
  const [showPhoneVerificationModal, setShowPhoneVerificationModal] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const userDetails = useSelector((state) => state.userDetails)
  const { status } = useSelector((state) => state.userAttrConfirmCode)
  const { user, loading } = userDetails
  
  const verification = {
    emailClickHandler: () => {
      emailClickHandler(true)
    },
    phoneClickHandler: () => {
      phoneClickHandler(true)
    }
  }

  useEffect(() => {
      dispatch(getUserDetails(id))
      if(status) {
        emailClickHandler(false)
        phoneClickHandler(false)
      }
  }, [dispatch, history, status])

  const editUserInformation = () => {
    history.push({
      pathname: '/edit-information',
      state: { editInformations: true, user }
    })
  }
  const emailClickHandler = (bool) => {
    setShowEmailVerificationModal(bool)
  }
  const phoneClickHandler = (bool) => {
    setShowPhoneVerificationModal(bool)
  }
  return (
    <>
      {
      loading
        ? <div><p>Loading...</p></div>
        : (
          <>
            {
            showEmailVerificationModal &&
              <VerificationModal type='email' clickHandler={emailClickHandler} />
            }
            {
            showPhoneVerificationModal &&
              <VerificationModal type='phone' clickHandler={phoneClickHandler} />
            }
            <DashboardLayout
              title='User Profile'
            >
              <div className='x10-4-0-my-personals'>
                <div className='flex-col-2'>
                  <div className='frame-2923'>
                    <BackButton onClick={() => history.goBack()} />
                  </div>
                  <div className='profile border-1px-onyx'>
                    <div className='profile-info'>
                      {user && <>
                        <PersonalInformation user={user} />
                        {user?.phone === undefined || <ContactInformation user={user} />}
                        <AdditionalInformation user={user} />
                      </>}
                    </div>
                    <EditInformation
                      clickHandler={editUserInformation}
                      image={user?.attachments && process.env.REACT_APP_CDN_BASE_URL + '/attachments/' + user.attachments}
                      follow={user?.phone === undefined}
                    />
                    <AdditionalInformation user={user} />
                  </div>
                  <EditInformation
                    clickHandler={editUserInformation}
                    image={
                      user?.attachments &&
                      process.env.REACT_APP_CDN_BASE_URL +
                        '/attachments/' +
                        user.attachments
                    }
                  />
                </div>
                </div>
                </DashboardLayout>
                </>
              )}
            </>          
  )
}

export default Profile
