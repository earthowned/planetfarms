import { Auth } from 'aws-amplify'
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/userAction'

const SignOutModel = ({setModalActive}) => {
  const dispatch = useDispatch()

  async function signOut() {
    setModalActive(false)
    try {
        await Auth.signOut()
        dispatch(logout())
    } catch (error) {
        console.log('error signing out: ', error)
    }
  }

  return (
    <>
      <div className="confirm-modal-container">
          <button className="secondary-btn" onClick={() => signOut()}>Sign Out</button>
      </div>
    </>
  )
}

export default SignOutModel

