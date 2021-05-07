import React, {useState} from 'react'
import './courses.css'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import CoursesHeader from '../../Components/CoursesHeader/CoursesHeader';
import CoursesCard from '../../Components/CoursesCard/CoursesCard';
import GroupModal from '../../Components/GroupModal/GroupModal';


const Courses = () => {
    const [active, setActive] = useState(false)
    const [modalactive, setModalActive] = useState(false)
    return (
        <>
            {modalactive && <GroupModal clickHandler={setModalActive} name="Add to collection" btnName="Add to collection"/>}
            <DashboardLayout title="All courses">
                <div className="courses-main-container">
                    <CoursesHeader setActive={setActive}/>
                </div>
                    <CoursesCard category="Business Courses" setModalActive={setModalActive} />
                    <CoursesCard category="Farming Courses" setModalActive={setModalActive}/>
            </DashboardLayout>
        </>
    )
}

export default Courses
