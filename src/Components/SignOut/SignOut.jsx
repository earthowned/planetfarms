import { Auth } from 'aws-amplify'

const SignOutModel = ({setModalActive}) => {
  async function signOut() {
    setModalActive(false)
    try {
        await Auth.signOut()
    } catch (error) {
        console.log('error signing out: ', error)
    }
  }

  return (
    <>
      <div className="conform-modal-container">
          <button className="secondary-btn" onClick={() => signOut()}>Sign Out</button>
      </div>
    </>
  )
}

export default SignOutModel

