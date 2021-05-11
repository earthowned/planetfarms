import React, { useEffect } from 'react'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import { useParams } from 'react-router-dom'
import {
  PersonalInformation,
  ContactInformation,
  AdditionalInformation
} from '../../components/profileFormCard/ProfileFormCard'
import './CommunityMemberProfile.scss'
import BackButton from '../../components/backButton/BackButton'
import EditInformation from '../../components/editInformation/EditInformation'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../../actions/userAction'

function CommunityMembersProfile({ history }) {
  const { id } = useParams()

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      dispatch(getUserDetails(id))
    } else {
      history.push('/login')
    }
  }, [dispatch, history, id, userInfo])

  return (
    <DashboardLayout title='Mikhail Ugryumov'>
      <div className='x10-4-0-my-personals'>
        <div className='flex-col-2'>
          <div className='frame-2923'>
            <BackButton location='/community-members' />
          </div>
          <div className='profile border-1px-onyx'>
            <div className='profile-info'>
              {user && <PersonalInformation user={user} />}
              {user && <ContactInformation user={user} />}
              {user && <AdditionalInformation user={user} />}
            </div>
            <EditInformation image='/img/profile-image.svg' follow='follow' />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CommunityMembersProfile
