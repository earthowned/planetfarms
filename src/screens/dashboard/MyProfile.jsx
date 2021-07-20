import React, { useEffect, useState } from 'react'
import './MyProfile.scss'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import BackButton from '../../components/backButton/BackButton'
import {
  AdditionalInformation,
  ContactInformation,
  PersonalInformation
} from '../../components/profileFormCard/ProfileFormCard'
import EditInformation from '../../components/editInformation/EditInformation'
import { getMyDetails } from '../../actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import VerificationModal from '../../components/verificationModal/VerificationModal'

function MyProfile () {
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
    dispatch(getMyDetails())
    if (status) {
      emailClickHandler(false)
      phoneClickHandler(false)
    }
  }, [dispatch, history, status])

  const editUserInformation = () => {
    history.push({ pathname: '/edit-information', state: { editInformations: true, user } })
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
        ? (
          <div>
            <p>
              Loading...
            </p>
          </div>
          )

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
            <DashboardLayout title='My Profile'>

              <div className='x10-4-0-my-personals'>
                <div className='flex-col-2'>
                  <div className='frame-2923'>
                    <BackButton location='/dashboard' />
                  </div>
                  <div className='profile border-1px-onyx'>
                    <div className='profile-info'>
                      <PersonalInformation user={user} />
                      <ContactInformation user={user} verification={verification} />
                      <AdditionalInformation user={user} />
                    </div>
                    <EditInformation clickHandler={editUserInformation} image={user?.attachments && process.env.REACT_APP_CDN_BASE_URL + '/attachments/' + user.attachments} />
                  </div>
                </div>
              </div>
            </DashboardLayout>
          </>
          )
    }
    </>
  )
}

export default MyProfile
