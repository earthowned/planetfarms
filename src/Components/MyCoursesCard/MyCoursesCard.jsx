import React from "react";
import { Link } from "react-router-dom";
import "./my-courses-card.css";

const MyCoursesCard = () => {
  return (
    <div>
      {myCourses()} {specialCourse()}
    </div>
  );
};

export default MyCoursesCard;

const myCourses = () => {
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
      bgImage: "/img/course-card-1.svg",
    },
    {
      _id: 3,
      name: " Jimmy Beam personal business course",
      activity: " Last activity: 7 days ago",
      lesson: "1/8 lessons",
      bgImage: "/img/course-card-2.svg",
    },
  ];
  return (
    <>
      <div className="my-course-container border-1px-onyx">
        <div className="my-courses-title ibmplexsans-semi-bold-quarter-spanish-white-24px">
          My courses
        </div>
        <Link to="/mycoursePage" style={{ textDecoration: "none" }}>
          <div className="course-card-container">
            {courseData.map((data) => {
              return (
                <div
                  className="course-card"
                  style={{ backgroundImage: `url(${data.bgImage})` }}
                >
                  <div className="card-text-container">
                    <div className="course-name-text valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">
                      {data.name}
                    </div>
                    <p className="course-text-2 valign-text-middle ibmplexsans-regular-normal-quarter-spanish-white-16px">
                      {data.activity}
                    </p>
                  </div>
                  <div className="lesson-index">
                    <div className="lesson-index-bar"></div>
                    <div className="lessons-number valign-text-middle">
                      {data.lesson}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Link>
      </div>
    </>
  );
};

const specialCourse = () => {
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
  return (
    <>
      <div className="my-course-container border-1px-onyx">
        <div className="my-courses-title ibmplexsans-semi-bold-quarter-spanish-white-24px">
          Special for you
        </div>
        <div className="course-card-container">
          {specialCourseData.map((data) => {
            return (
              <>
                <div
                  className="course-card"
                  style={{ backgroundImage: `url(${data.bgImage})` }}
                >
                  <div className="card-text-container">
                    <div className="course-name-text valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">
                      {data.name}
                    </div>
                    <p className="course-text-2 valign-text-middle ibmplexsans-regular-normal-quarter-spanish-white-16px">
                      {data.status}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
