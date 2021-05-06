import React from 'react'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
// import DataField from '../../Components/ProfileFormCard/ProfileFormCard'
import {
  PersonalInformation,
  ContactInformation,
  AdditionalInformation
} from '../../Components/ProfileFormCard/ProfileFormCard'
import './community-member-profile.css'
import BackButton from '../../Components/BackButton/BackButton'
import EditInformation from '../../Components/EditInformation/EditInformation'

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
