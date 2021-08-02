import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Table from '../../components/table/Table'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import { getApi, putApi } from '../../utils/apiFunc'
import { getCommunity } from '../../utils/getCommunity'
import './CommunityMemberAdmin.scss'

const ComMemberAdmin = () => {
  const [data, setData] = useState([])
  const [success, setSuccess] = useState(null)

  const dispatch = useDispatch()

  
  // fetching current community
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

  console.log(data);

  const allowAccess = async (id) => {
    const { data } = await putApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/communities-users/${id}/community/${currentCommunity.id}`,
      { role: 'manager' }
    )
    setSuccess(data)
  }

  return (
    <DashboardLayout title={currentCommunity.name}>
      {data.length && <Table 
        addSymbolNumber={true} 
        data={{
          tblData: data,
          tblProperty: ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'role', 'options'],
          tblHeader: ['First Name', 'Last Name', 'Email', 'Phone', 'Date of Birth', 'Role', 'options'],
        }}
        options={
          [
            {
              img: '/img/edit-icon.svg',
              action: allowAccess
            }
          ]
        }
      />}
    </DashboardLayout>
  )
}

export default ComMemberAdmin
