import React from 'react'
import BackButton from '../../../Components/BackButton/BackButton'
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'

const LessonPage = () => {
    return (
        <DashboardLayout title="Course page">
            <BackButton location={"/mycoursepage"} />
        </DashboardLayout>
    )
}

export default LessonPage
