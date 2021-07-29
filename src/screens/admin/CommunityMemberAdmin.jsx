import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import {  getApi, getCommunity, putApi } from '../../utils/apiFunc'
import './CommunityMemberAdmin.scss';

const ComMemberAdmin = () => {
    const [data, setData] = useState([]);
    const [success, setSuccess] = useState(null);
    
    const dispatch = useDispatch();
    
    // getting current community from localstorage
    const currentCommunity = getCommunity();

    useEffect(() => {
        getMemberDetails()
    }, [success])

    const getMemberDetails = async () => {
        const { data } = await getApi(
        dispatch,
        `${process.env.REACT_APP_API_BASE_URL}/api/communities-users/community/${currentCommunity.id}/details`
        )
        setData(data.results)
    }

    const allowAccess = async (id) => {
        // const {data} = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/communities-users/${id}/community/${currentCommunity.id}`,
        // {role: "manager"}, config)
        const {data} = await putApi(
            dispatch,
            `${process.env.REACT_APP_API_BASE_URL}/api/communities-users/${id}/community/${currentCommunity.id}`,
            {role: 'manager'}
        )
        setSuccess(data)
    }

    return (
        <DashboardLayout title={currentCommunity.name}>
            <div className="com-member-container">
                <div className="com-member-header">
                {
                    ["firstName", "lastName", "email", "phone", "dateOfBirth", "role", "options"].map(el => {
                        return (
                                <p>{el}</p>
                        )
                    })
                }
                </div>
                {
                    data.map(item => {
                        const {firstName, lastName, email, phone, dateOfBirth, role} = item
                        return (
                            <div className="com-member-item">
                                <p>{firstName ? firstName : 'name'}</p>
                                <p>{lastName ? lastName : 'lastname'}</p>
                                <p>{email ? email : 'email'}</p>
                                <p>{phone ? phone : 'phone'}</p>
                                <p>{dateOfBirth ? dateOfBirth : 'dateOfBirth'}</p>
                                <p>{role ? role : 'role'}</p>
                                <p className="access-btn"><img src="/img/edit-icon.svg" onClick={() => allowAccess(item.id)} /></p>
                            </div>
                        )
                    })
                }
            </div>
        </DashboardLayout>
    )
}

export default ComMemberAdmin
