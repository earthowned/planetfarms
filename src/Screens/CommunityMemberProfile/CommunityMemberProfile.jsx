import React, { useEffect } from 'react'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import { useParams } from 'react-router-dom'
import {
  PersonalInformation,
  ContactInformation,
  AdditionalInformation
} from '../../Components/ProfileFormCard/ProfileFormCard'
import './community-member-profile.css'
import BackButton from '../../Components/BackButton/BackButton'
import EditInformation from '../../Components/EditInformation/EditInformation'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../../actions/userAction'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function CommunityMembersProfile() {
  const { id } = useParams()

  const dispatch = useDispatch()
  const history = useHistory()

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      dispatch(getUserDetails(id))
    } else {
      history.push('/login')
    }
  }, [dispatch, history, id, userInfo])

  const editUserInformation = () => {
    history.push({ pathname: '/register-complete', state: { editInformations: true, user } })
  }

  return (
    <DashboardLayout title={user.name}>
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
            <EditInformation clickHandler={editUserInformation} image='/img/profile-image.svg' follow='follow' />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CommunityMembersProfile
