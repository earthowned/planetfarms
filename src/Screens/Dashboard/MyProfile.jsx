import React from 'react'
import './my-profile.css'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import BackButton from '../../Components/BackButton/BackButton'
import {
  AdditionalInformation,
  ContactInformation,
  PersonalInformation
} from '../../Components/ProfileFormCard/ProfileFormCard'
import EditInformation from '../../Components/EditInformation/EditInformation'

function MyProfile () {
  return (
    <DashboardLayout title='My Profile'>
      <div className='x10-4-0-my-personals'>
        <div className='flex-col-2'>
          <div className='frame-2923'>
            <BackButton location='/dashboard' />
          </div>
          <div className='profile border-1px-onyx'>
            <div className='profile-info'>
              <PersonalInformation />
              <ContactInformation />
              <AdditionalInformation />
            </div>
            <EditInformation image='/img/DashboardProfilePic.png' />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default MyProfile
