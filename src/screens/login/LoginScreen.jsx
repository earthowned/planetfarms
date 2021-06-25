import { useEffect, useState } from 'react'
import SignIn from '../../components/signInSignUp/SignIn'
import SignLayout from '../../layout/signLayout/SignLayout'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const LoginScreen = () => {
  const history = useHistory()
  const [loggedIn, setLoggedIn] = useState(true)
  useEffect(() => {
    const userInfo = window.localStorage.getItem('userInfo')
    if (userInfo) {
      setLoggedIn(true)
      history.push('/')
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
