import React from "react";
import "./my-courses-card.css";

 const courseData = [
    {
      _id: 1,
      name: " Jimmy Beam personal business course",
      activity: " Last activity: 7 days ago",
      lesson: "1/8 lessons",
      bgImage: "/img/course-card-1.svg",
    },
    {
      _id: 2,
      name: " Jimmy Beam personal business course",
      activity: " Last activity: 7 days ago",
      lesson: "1/8 lessons",
      bgImage: "/img/course-card-2.svg",
    },
  ];

  const specialCourseData = [
    {
      _id: 1,
      name: "Find your inner power. J.McBell course",
      status: "Free Course",
      bgImage: "/img/special-course-card.svg",
    },

    {
      _id: 2,
      name: "Find your inner power. J.McBell course",
      status: "Amount:$20",
      bgImage: "/img/special-course-card-2.svg",
    },
    {
      _id: 3,
      name: "  Find your inner power. J.McBell course",
      status: "Amount:$50",
      bgImage: "/img/special-course-card.svg",
    },
  ];

const MyCoursesCard = () => {
  return (
    <div className="my-course-container-wrapper">
      <div className="my-course-inner-container">
          <h4>My courses</h4>
          <div className="my-course-card-container">
        <CourseCard data={courseData}/>
        </div>
      </div>
      <div className="my-course-inner-container">
          <h4>Special for you</h4>
          <div className="my-course-card-container">
        <CourseCard data={specialCourseData}/>
        </div>
      </div>
    </div>
  );
};

export default MyCoursesCard;

const CourseCard = ({data}) => {
  return (
    data && data.map(item => {
      return (<>
            <div className="my-course-card" key={item._id} style={{backgroundImage: `url(${item.bgImage})`}}>
              <div className="my-course-content">
                <h3>{item.name}</h3>
                <p>{item.activity || item.status}</p>
                {
                  item.lesson && <div className="lesson-progress">
                      <div className="lesson-completed"></div>
                      <span>{item.lesson}</span>
                    </div>
                }
              </div>
            </div>
        </>
      )
    })
  )
}
