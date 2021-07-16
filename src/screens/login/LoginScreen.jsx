import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import SignIn from '../../components/signInSignUp/SignIn'
import SignLayout from '../../layout/signLayout/SignLayout'
import { checkAndUpdateToken, routingCommunityNews } from '../../actions/userAction'

const LoginScreen = () => {
  const dispatch = useDispatch()
  const [loggedIn, setLoggedIn] = useState(true)

  // fetching current community
  const currentCommunity = localStorage.getItem('currentCommunity')
    ? JSON.parse(localStorage.getItem('currentCommunity'))
    : null

  useEffect(() => {
    const userInfo = window.localStorage.getItem('userInfo')
    if (userInfo) {
      setLoggedIn(true)
      const route = dispatch(checkAndUpdateToken())
      console.log(route)
      if (route) {
        routingCommunityNews(dispatch, true)
      }
    } else {
      setLoggedIn(false)
    }
  }, [loggedIn])
  return (
    <>
      {!loggedIn && (
        <SignLayout>
          <SignIn />
        </SignLayout>
      )}
    </>
  )
}

export default LoginScreen
