import Logo from '../../Components/Logo/Logo'
import Banner from '../../Components/SignInSignUp/Banner'
import './SignLayout.scss'

const SignLayout = ({ children }) => {
  return (
    <div className=' SignLayout'>
      <div className=' wrapper'>
        <div className='form'>
          <div className='icons'>
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
