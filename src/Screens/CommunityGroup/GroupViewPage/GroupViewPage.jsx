import React, { useState, useEffect } from 'react'
import BackButton from '../../../Components/BackButton/BackButton'
import FarmsDetailsCard from '../../../Components/FarmsDetailsCard/FarmsDetailsCard'
import CommunityGroupPhotos from '../../../Components/CommunityGroupPhotos/CommunityGroupPhotos'
import CommunityGroupPost from '../../../Components/CommunityGroupPost/CommunityGroupPost'
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'
import { listGroupById } from '../../../actions/communityGroupActions'
import { useSelector, useDispatch } from 'react-redux'

import { useParams } from 'react-router-dom'

import './group-view-page.css'
import FilterSearch from '../../../Components/FilterSearch/FilterSearch'

const CommunityGroupViewPage = () => {
  const { id } = useParams()
  console.log('id', id)
  const [followers, setFollowers] = useState(false)
  const groupSingle = useSelector((state) => state.groupView.group)
  const dispatch = useDispatch()

  console.log(groupSingle)
  useEffect(() => {
    dispatch(listGroupById(id))
  }, [dispatch])
  return (
    <DashboardLayout title='Community Group'>
      <div className='x05-2-0-group-page-inside-user-view'>
        <div className='flex-col-4'>
          <BackButton location='/community-group' />
          <div className='first-card border-1px-onyx'>
            <div className='posts-farmer'>
              <FarmsDetailsCard
                image='https://anima-uploads.s3.amazonaws.com/projects/60616b2488353a18d38d9e60/releases/60616bb4ad09ea041add624b/img/frame-1969@1x.png'
                title={groupSingle.title}
                description={groupSingle.description}
                followerNumber=' 2,564 followers'
              />
              <div className='group-boderline' />
            </div>
            {/* <GroupPhoto /> */}
            <CommunityGroupPhotos />
          </div>
          <div className='group-flex-row-7'>
            <div style={{ overflowY: 'scroll' }}>
              <CommunityGroupPost
                title='Think like a farmer'
                timestamps='November 18 at 05:45 AM'
                content='Over the last ten years, the emphasis on reducing fuel emissions has been an agenda for many governments. In a bid to reduce their collective carbon footprint, many people have started looking for a way to control their impact on the environment. '
                postImage='/img/bg-image1.svg'
              />
              <CommunityGroupPost
                title='Be like a farmer'
                timestamps='November 30 at 09:40 PM'
                content={` Hi there! What do you think about new COVID 19? How will you
            protect your family and business? It’s just a real big problem
            right now with my business!!! `}
              />
            </div>
            {/** * filter */}
            {/* {filter()} */}
            <FilterSearch />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
export default CommunityGroupViewPage
