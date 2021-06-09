import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import { useForm } from 'react-hook-form'

import Logo from '../../components/logo/Logo'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import ConfirmModal from '../../components/simpleModal/ConfirmModal'
import Secondarybtn from '../../components/secondaryBtn/Secondarybtn'
import DragDrop from '../../components/dragDrop/DragDrop'
import './Congratulation.scss'

function CongratulationScreen () {
  const welcomeBack = 'Congratulations!'
  const welcomeBack2 = 'Please fill these fields to communicate with other people easier:'

  const [modalActive, setModalActive] = useState(false)

  const { register, errors, handleSubmit } = useForm()

  const location = useLocation()
  const history = useHistory()
  const username = location?.state?.username
  const password = location?.state?.password

  async function signUp ({ firstname, lastname, phone, birthday, email }) {
    console.log(username, password, email, phone)
    try {
      const user = await Auth.signUp({
        username,
        password,
        attributes: {
          email
        }
      })
      setModalActive(true)
    } catch (error) {
      console.log('error signing up:', error)
    }
  }

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   if (!firstname) setFirstnameError(true);
  //   if (!lastname) setLastnameError(true);
  //   if (!phone) setPhoneError(true);
  //   if (!birthday) setBirthdayError(true);
  //   if (!email) setEmailError(true);
  //   if (firstname && lastname && phone && birthday && email) {
  //     signUp();
  //   }
  // };

  const onSubmit = ({ firstname, lastname, phone, birthday, email }) => {
    console.log(firstname, lastname, phone, birthday, email)
    // if (firstname && lastname && phone && birthday && email) {
    //   signUp({ firstname, lastname, phone, birthday, email });
    // }
  }

  return (
    <form className='congratulation'>
      <div className='icons'>
        <Logo />
      </div>

      <div className='header-wrapper'>
        <h1 className='header'>{welcomeBack}</h1>
        <p className='subheader'>{welcomeBack2}</p>
      </div>

      {modalActive && <ConfirmModal username={username} password={password} />}

      <div className='congratulation-container'>
        <div className='form'>
          <div className='row'>
            <div className='row-1-col'>
              <Input
                placeholder='First Name'
                type='text'
                name='firstname'
                ref={register({
                  required: {
                    value: true,
                    message: 'You must enter First Name'
                  }
                })}
                errors={errors}
                noIcon='noIcon'
              />
            </div>

            <div className='row-1-col'>
              <Input
                name='lastname'
                placeholder='Last Name'
                type='text'
                ref={register({
                  required: {
                    value: true,
                    message: 'You must enter Last Name'
                  }
                })}
                errors={errors}
                noIcon='noIcon'
              />
            </div>
          </div>

          <div className='row'>
            <div className='row-1-col'>
              <Input
                name='email'
                placeholder='E-mail Address'
                type='email'
                ref={register({
                  required: {
                    value: true,
                    message: 'You must enter E-mail'
                  }
                })}
                errors={errors}
                noIcon='noIcon'
              />
            </div>

            <div className='row-1-col'>
              <Input
                name='phone'
                placeholder='Phone Number (Optional)'
                type='number'
                ref={register({
                  required: {
                    value: false
                  }
                })}
                errors={errors}
                noIcon='noIcon'
              />
            </div>
          </div>

          <div className='row row-last'>
            <div className='row-1-col'>
              <Input
                name='birthday'
                placeholder='Date of Birth'
                type='date'
                ref={register({
                  required: {
                    value: true,
                    message: 'You must date of birth'
                  }
                })}
                errors={errors}
                noIcon='noIcon'
              />
            </div>
          </div>

          <div className='button-wrapper'>
            <div className='btn'>
              <Secondarybtn
                name='Skip for now'
                clickHandler={() => history.push('/community-page-news')}
              />
            </div>
            <div className='btn'>
              <Button name='Continue' onClick={handleSubmit(onSubmit)} />
            </div>
          </div>
        </div>
        <div className='dragAndDrop'>
          <DragDrop />
        </div>
      </div>
    </form>
  )
}

export default CongratulationScreen