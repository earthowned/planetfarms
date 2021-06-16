import React from 'react'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import {
  PersonalInformation,
  ContactInformation,
  AdditionalInformation
} from '../../components/profileFormCard/ProfileFormCard'
import './CommunityMemberProfile.scss'
import BackButton from '../../components/backButton/BackButton'
import EditInformation from '../../components/editInformation/EditInformation'

function App () {
  return (
    <DashboardLayout title='Mikhail Ugryumov'>
      <CommunityMembersProfile />
    </DashboardLayout>
  )
}

export default App

function CommunityMembersProfile () {
  return (
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
          <EditInformation image='/img/profile-image.svg' follow='follow' />
        </div>
      </div>
    </div>
  )
}
