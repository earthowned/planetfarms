import React, { useLayoutEffect, useState } from 'react'
import { getApi } from './apiFunc'
const { useDispatch } = require('react-redux')

// this is higer order component
// wrap this to the component to get role of user
// then check the role (available in props)
// and redirect if its not the role (see: Category.jsx)

const GetRole = (OriginalComponent) => {
  const NewComponent = () => {
    const [role, setRole] = useState('')

    const dispatch = useDispatch()
    useLayoutEffect(() => {
      fetchData()
    }, [])
    const fetchData = async () => {
      const { data } = await getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/users/profile`)
      setRole(data.role)
    }
    return <>{role && <OriginalComponent role={role} />}</>
  }
  return NewComponent
}

export default GetRole
