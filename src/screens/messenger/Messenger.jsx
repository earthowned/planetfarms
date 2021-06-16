import React, { useState } from 'react'
import './Messenger.scss'
import HeaderComponent from '../../components/header/HeaderComponent'
import MessengerMain from '../../components/messengerMain/MessengerMain'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'

const Messenger = () => {
  return (
    <>
      <DashboardLayout title='Messenger'>
        <MessengerMain />
      </DashboardLayout>
    </>
  )
}

export default Messenger
