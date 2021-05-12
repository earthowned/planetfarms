import React, { useEffect } from 'react'
import './MyProfile.scss'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import BackButton from '../../components/backButton/BackButton'
import {
  AdditionalInformation,
  ContactInformation,
  PersonalInformation
} from '../../components/profileFormCard/ProfileFormCard'
import EditInformation from '../../components/editInformation/EditInformation'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../../actions/userAction'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function MyProfile() {
  const dispatch = useDispatch()
  const history = useHistory()
  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      dispatch(getUserDetails(userInfo.id))
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  const editUserInformation = () => {
    history.push({ pathname: '/register-complete', state: { editInformations: true } })
  }
  return (
    <DashboardLayout title='My Profile'>
      <div className='x10-4-0-my-personals'>
        <div className='flex-col-2'>
          <div className='frame-2923'>
            <BackButton location='/dashboard' />
          </div>
          <div className='profile border-1px-onyx'>
            <div className='profile-info'>
              <PersonalInformation user={user} />
              <ContactInformation user={user} />
              <AdditionalInformation user={user} />
            </div>
            <EditInformation clickHandler={editUserInformation} image='/img/DashboardProfilePic.png' />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default MyProfile
