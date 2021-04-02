import React,{useState} from 'react'
import './style.css';
import HeaderComponent from '../../Components/Header/HeaderComponent';
import MessengerMain from '../../Components/MessengerMain/MessengerMain';
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';


const Messenger = () => {
   
    return (
        <>
        <DashboardLayout>
            <MessengerMain />  
        </DashboardLayout>
        </>
    )
}

export default Messenger
