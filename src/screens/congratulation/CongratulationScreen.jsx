import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import moment from 'moment'

import Logo from '../../components/logo/Logo'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
// import ConfirmModal from '../../components/simpleModal/ConfirmModal'
import Secondarybtn from '../../components/secondaryBtn/Secondarybtn'
import DragDrop from '../../components/dragDrop/DragDrop'
import { updateUser } from '../../actions/userAction'
import './Congratulation.scss'

function CongratulationScreen () {
  const [profileImage, setProfileImage] = useState(null)
  const dispatch = useDispatch()

  const location = useLocation()
  const history = useHistory()
  const editInformations = location?.state?.editInformations
  const userdetail = location?.state?.user

  const { register, errors, handleSubmit } = useForm({
    defaultValues: {
      firstName: userdetail?.firstName,
      lastName: userdetail?.lastName,
      email: userdetail?.email,
      phone: userdetail?.phone,
      birthday: userdetail?.dateOfBirth
    }
  })

  const welcomeBack = editInformations ? 'Edit Information' : 'Congratulations!'
  const welcomeBack2 = 'Please fill these fields to communicate with other people easier:'

  const userLogin = useSelector((state) => state.userLogin)
  const userDetails = useSelector((state) => state.userDetails)
  const { userInfo } = userLogin
  const { user } = userDetails

  const onSubmit = ({ firstName, lastName, phone, birthday, email }) => {
    const attachments = profileImage
    dispatch(updateUser({ firstName, lastName, phone, birthday, email, attachments }, history))
    !user && history.push('/')
  }

  return (
    <form className='congratulation'>
      {!editInformations && (
        <div className='icons'>
          <Logo />
        </div>
      )}

      <div className='header-wrapper'>
        <h1 className='header'>{welcomeBack}</h1>
        <p className='subheader'>{!editInformations && welcomeBack2}</p>
      </div>

      {/* {modalActive && <ConfirmModal username={username} password={password} />} */}

      <div className='congratulation-container'>
        <div className='form'>
          <div className='row'>
            <div className='row-1-col'>
              <Input
                placeholder='First Name'
                type='text'
                name='firstName'
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
                name='lastName'
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
                    message: 'You must enter date of birth'
                  }
                })}
                errors={errors}
                noIcon='noIcon'
              />
            </div>
          </div>

          <div className='button-wrapper'>
            <div className='btn'>
              {editInformations
                ? (
                  <Secondarybtn name='Cancel' clickHandler={() => history.goBack()} />
                  )
                : (
                  <Secondarybtn name='Skip for now' clickHandler={() => history.push('/')} />
                  )}
            </div>
            <div className='btn'>
              <Button name='Continue' onClick={handleSubmit(onSubmit)} />
            </div>
          </div>
        </div>
        <div className='dragAndDrop'>
          <DragDrop onChange={(img) => setProfileImage(img)} />
        </div>
      </div>
    </form>
  )
}

export default CongratulationScreen
