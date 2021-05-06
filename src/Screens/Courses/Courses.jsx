import React, {useState} from 'react'
import './courses.css'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import CoursesHeader from '../../Components/CoursesHeader/CoursesHeader';
import CoursesCard from '../../Components/CoursesCard/CoursesCard';


const Courses = () => {
    const [active, setActive] = useState(false)
    return (
        <DashboardLayout title="All courses">
            <div className="courses-main-container">
                <CoursesHeader setActive={setActive}/>
            </div>
            <div className="course-card-wrapper">
                <CoursesCard category="Business Courses"/>
            </div>
            <div className="course-card-wrapper">
                <CoursesCard category="Farming Courses"/>
            </div>
        </DashboardLayout>
    )
}

export default Courses
