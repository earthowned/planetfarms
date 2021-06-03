import Logo from '../../Components/Logo/Logo'
import Banner from '../../Components/SignInSignUp/Banner'
import './SignLayout.scss'

const SignLayout = ({ children }) => {
  return (
    <div className=' SignLayout'>
      <div className=' SignLayout-wrapper'>
        <div className='SignLayout-form'>
          <div className='SignLayout-icons'>
            <Logo />
          </div>
          {children}
        </div>
        <Banner />
      </div>
    </div>
  )
}

export default SignLayout
