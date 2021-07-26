import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import moment from 'moment'

import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import BackButton from '../../components/backButton/BackButton'
import DragDrop from '../../components/dragDrop/DragDrop'
import { updateUser } from '../../actions/userAction'
import './Congratulation.scss'

function CongratulationScreen () {
  const dispatch = useDispatch()

  const location = useLocation()
  const history = useHistory()
  const userdetail = location?.state?.user

  const image = userdetail && userdetail?.attachments && process.env.REACT_APP_CDN_BASE_URL + '/attachments/' + userdetail.attachments
  const [profileImage, setProfileImage] = useState(`${userdetail.attachments}`)

  const { register, errors, handleSubmit } = useForm({
    defaultValues: {
      firstName: userdetail?.firstName,
      lastName: userdetail?.lastName,
      email: userdetail?.email,
      phone: userdetail?.phone,
      birthday: userdetail
        ? moment(userdetail.dateOfBirth).format('YYYY-MM-DD')
        : ''
    }
  })

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails
  const onSubmit = ({ firstName, lastName, phone, birthday, email }) => {
    const attachments = profileImage
    dispatch(
      updateUser(
        { firstName, lastName, phone, birthday, email, attachments },
        history
      )
    )
    !user && history.push('/')
  }

  return (
    <DashboardLayout title='Edit Information'>
      <div className='x10-4-0-my-personals'>
        <div className='flex-col-2'>
          <div className='frame-2923'>
            <BackButton location='/myProfile' />
          </div>
          <div className='edit-information border-1px-onyx'>
            <form className='edit-information-container'>
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
                        type='text'
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
                        placeholder='Date of Birth (Optional)'
                        type='date'
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
                  <div className='button-wrapper'>
                    <div className='btn'>
                      <Button
                        name='Continue'
                        onClick={handleSubmit(onSubmit)}
                      />
                    </div>
                  </div>
                </div>
                <div className='dragAndDrop'>
                  <DragDrop onClick={() => setProfileImage()} onChange={(img) => setProfileImage(img)} previousImageUrl={image} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CongratulationScreen
