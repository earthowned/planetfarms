import React,{useState} from 'react'
import Background from '../../../Components/Background/Background';
import CoursesHeader from '../../../Components/CoursesHeader/CoursesHeader';
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout';
import {Link, useHistory} from 'react-router-dom';
import './course-collection.css';

const farming = [
    {
        title: "Farm 2020 courses collection",
        img: "/img/farmer.svg",
        subscribers: 65
    },
    {
        title: "Farm animals collection in 2020 USA",
        img: "/img/farmer.svg",
        subscribers: 655
    },
]

const mycollection = [
    {
        title: "Farm 2020 courses collection",
        img: "/img/farmer.svg",
        subscribers: 365
    }
]

const CourseCollection = () => {
    const [active, setActive] = useState(false);
    return (
        <DashboardLayout title='All courses'>
        <div className='courses-main-container'>
          <CoursesHeader setActive={setActive} />
            <CourseUserCard name="My Courses" data={farming} btnName="Manage course" subName="subscribers" />
            <CourseUserCard name="My Collections" data={mycollection} btnName="Edit Collection" subName="users saved" />
         </div>
      </DashboardLayout>
    )
}

const CourseUserCard = ({name, data, btnName, subName}) => {
    return (
        <>
         <h4 className="courses-users-collection-header">{name}</h4>
            <div className="courses-collection-main-container">
            {
                data.map(item => {
                    return (
                        <BackgroundUserCard item={item} btnName={btnName} subName={subName} />
                    )
                })
            }
            </div>
        </>
    )
}

export const BackgroundUserCard = ({item, btnName, subName}) => {
    const [savedActive, setSavedActive] = useState(false);
    const history = useHistory();
    return (
        <Background image={item.img}>
            <button className="subs">
                <span>{item.subscribers} {subName}</span>
            </button>
            <div className="courses-users-content">
              <h3>{item.title}</h3>                           
              {/* <button onClick={() => history.push('/dashboard')} className="trasnsparent-btn fixed-width courses-users-btn" onClick={() => setSavedActive(!savedActive)}> */}
                <Link to="/courses/my-courses/edit-course">
               {btnName}
               </Link>
              {/* </button> */}
            </div>
        </Background>
    )
}

export default CourseCollection


