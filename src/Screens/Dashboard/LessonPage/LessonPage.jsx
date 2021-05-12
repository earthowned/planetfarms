import React, { useState } from 'react'
import BackButton from '../../../Components/BackButton/BackButton'
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'
import Button from '../../../Components/Button/Button'

import './lesson-page.css'

const LessonPage = () => {
  return (
    <DashboardLayout title='Course page'>
      <BackButton location='/mycoursepage' />
      <LessonDetail />
      <MaterialComponent />
    </DashboardLayout>
  )
}

const contents = [1, 2]

const LessonDetail = () => {
  return (
    <div className='lesson-description-wrapper'>
      <h1>Lesson 1. Introducing</h1>
      <div className='lesson-description-img-wrapper'>
        <img src='/img/farm.svg' alt='green field with houses' />
      </div>
      {
        contents.map(item => {
          return (
            <div key={item} className='lesson-description-content'>
              <h4>Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          )
        })
      }
      <LessonVideo />
      <LessonTest />
    </div>
  )
}

function LessonVideo () {
  return (
    <div className='lesson-description-video'>
      <div className='lesson-description-background'>
        <img src='/img/man.svg' alt='lesson-video' />
      </div>
      <div className='video-icon'>
        <img src='/img/video-icon.svg' alt='video icon' />
      </div>
      <div className='library-icon-wrapper'>
        <img src='/img/book-outlined.svg' alt='library icon' />
      </div>
      <div className='lesson-description--video-desription'>
        <h3>Farmer Business speech 2020</h3>
        <p>The wolf of wall street movie is about <br /> Jordan Belfort</p>
      </div>
    </div>
  )
}

function LessonTest () {
  return (
    <div className='lesson-test-panel'>
      <div className='lesson-test-panel-left'>
        <h3>Lesson test</h3>
        <p>Make a lesson test where you can use new information that you know</p>
        <div className='lesson-test-btn-wrapper'>
          <Button name='Start text' />
        </div>
      </div>
      <div className='lesson-test-panel-right'>
        <h4>My results</h4>
        <div className='lesson-test-panel-right--attempts'>
          <h4>You didn't finish test yet.</h4>
        </div>
      </div>
    </div>
  )
}

const document = [
  {
    id: 1,
    name: 'Finance document.pdf',
    img: '/img/pdf.svg'
  },
  {
    id: 2,
    name: 'Finance document.pdf',
    img: '/img/pdf.svg'
  },
  {
    id: 3,
    name: 'Finance document.pdf',
    img: '/img/pdf.svg'
  },
  {
    id: 4,
    name: 'Finance document.pdf',
    img: '/img/pdf.svg'
  },
  {
    id: 5,
    name: 'Finance document.pdf',
    img: '/img/pdf.svg'
  },
  {
    id: 6,
    name: 'Finance document.pdf',
    img: '/img/pdf.svg'
  }
]

const MaterialComponent = () => {
  return (
    <div className='material-wrapper'>
      <div className='material-header'>
        <h4>Materials</h4>
        <div className='download-all'>
          <img src='/img/download-icon.svg' alt='download icon' />
          <h4>Donwload all files</h4>
        </div>
      </div>
      <div className='document-wrapper'>
        {
          document.map(item => {
            return (<Document item={item} />)
          })
        }
      </div>
    </div>
  )
}

const Document = ({ item }) => {
  const [active, setActive] = useState(item.id)
  const [dropDownItem, setDropDownItem] = useState(0)

  function dropItem (num) {
    setDropDownItem((prev) => {
      if (prev === num) num = 0
      return num
    })
  }

  return (
    <div className='document'>
      <img src={item.img} alt='document type' />
      <h4>{item.name}</h4>
      <img onClick={() => { dropItem(item.id) }} src='/img/more-horizontal.svg' alt='horizontal icon' />
      {
        active === dropDownItem && <div key={item.id} className='document-download-toggle'>
          <div><img src='/img/download-icon.svg' alt='download icon' /> <span>Download</span></div>
          <div><img src='/img/book-outlined.svg' alt='library icon' /> <span>Add to my library</span></div>
        </div>
      }
    </div>
  )
}

export default LessonPage
