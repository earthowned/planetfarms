import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allowAccess, listMembers } from '../../actions/memberActions'
import Table from '../../components/table/Table'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import { getApi} from '../../utils/apiFunc'
import { getCommunity } from '../../utils/getCommunity'
import './CommunityMemberAdmin.scss'

const ComMemberAdmin = () => {
  const [data, setData] = useState([]);
  const memberData = useSelector(state => state.accessMember)
  const { members } = useSelector(state => state.listMember)
  const {success} = memberData
  const dispatch = useDispatch()

  // fetching current community
  const currentCommunity = getCommunity()

  useEffect(() => {
    dispatch(listMembers())
    if(members) {
      setData(members)
    }
  }, [dispatch, success])
  
  const allowAccessFunc = async (id, role) => {
    dispatch(allowAccess(id, role));
  }
  
  // const getMemberDetails = async () => {
  //   const { data } = await getApi(
  //     dispatch,
  //     `${process.env.REACT_APP_API_BASE_URL}/api/communities-users/community/${currentCommunity.id}`
  //   )
  //   setData(data.results)
  // }

  return (
    <DashboardLayout title={currentCommunity.name}>
      {members.length && <Table
        addSymbolNumber
        data={{
          tblData: members,
          tblProperty: ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'role'],
          tblHeader: ['First Name', 'Last Name', 'Email', 'Phone', 'Date of Birth', 'Role']
        }}
        dropdown={{
          dropdownList: ['member', 'manager', 'coach'],
          action: allowAccessFunc
        }}
                      />}
    </DashboardLayout>
  )
}

export default ComMemberAdmin
