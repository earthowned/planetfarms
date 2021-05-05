import React from "react";
import useSizeFinder from "../../../utils/SizeFinder";
import Secondarybtn from "../../SecondaryBtn/Secondarybtn";
import "./course-description.css";

const CourseDescription = () => {
  return (
    <>
      <div className="course-page-container border-1px-onyx">
        <CourseDetail />
        {lessonCourse()}
      </div>
      <MoreCourse />
    </>
  );
};

export default CourseDescription;

const lessons = [
   {
     name: "Lesson 1",
     unlock: true
   },
   {
     name: "Lesson 2",
     unlock: false
   },
   {
     name: "Lesson 3",
     unlock: false
   },
   {
     name: "Lesson 4",
     unlock: false
   },
   {
     name: "Lesson 5",
     unlock: false
   },   
  ]

const ProgressBar = () => {
  const lessonLength = lessons.filter(item => item.unlock === true).length;
  const lessonIndicator = lessonLength * (115 / lessons.length);
  const accurateIndicator = lessonIndicator === 115 ? 92 : lessonIndicator;
  const windowWidth = useSizeFinder();

  return (
     <div className="lesson-bar">
              {windowWidth > 600 
              ? <div style={{width: `${accurateIndicator}%`}} className="lesson-progress-indicator"></div> 
              : <div style={{height: `${accurateIndicator}%`}} className="lesson-progress-indicator"></div> 
              }

              {
                lessons && lessons.map(item => {
                  return (
                    <div className="lesson-progress-content" key={item}>
                      <div className={item.unlock ? "circle-wrapper-active" : "circle-wrapper"}>
                       {item.unlock && <div className="circle"></div>}
                      </div>
                      <h4 className={item.unlock ? "lesson-progress-heading-active" : "lesson-progress-heading"}>{item.name}</h4>
                    </div>
                  )
                })
              }
            </div>
  )
  }

const CourseDetail = () => {
  return (
      <div className="description-course-page">
        <div className="bg-image"></div>
        <div className="course-details-wrapper">
          <div className="course-description">
            <h1 className="course-title" >Jimmy Beam personal course</h1>
            <p className="course-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla.
            </p>

            {/* lesson progress bar */}
           <ProgressBar />

          </div>
          <div className="secondary-btn-container">
          <Secondarybtn name="You are subscriber" image="/img/down-arrow.svg" />
          </div>
        </div>
      </div>
  );
};

const lessonCourse = () => {
  const lessonData = [
    {
      _id: 1,
      name: "01. Introducing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      lesson: "See lesson",
      bgImage: "/img/lesson-card.svg",
    },

    {
      _id: 2,
      name: "02.How to make new clients ?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      lesson: "See lesson",
      bgImage: "/img/lesson-card1.svg",
      className1: "unlock-lesson-container",
      className2: "unlock-lesson-wrapper",
      className3: "unlock",
      finish: "Finish Lesson",
    },
    {
      _id: 3,
      name: "03. How to deals with new clients ?",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      lesson: "See lesson",
      bgImage: "/img/lesson-card2.svg",
      className1: "unlock-lesson-container",
      className2: "unlock-lesson-wrapper",
      className3: "unlock",
      finish: "Finish Lesson",
    },
  ];

  return (
    <div className="lessons-container">
              <h3>Lessons</h3>
              {
                lessonData.map(data => {
                  return (<div className="lesson-card-wrapper">
                   {data.finish && <div className="lock-lesson">
                        <img src="/img/lesson-lock.svg" />
                        <h4>{data.finish}</h4>
                        </div>}
                    <div className= {data.finish ? "lesson-card lock-active" : "lesson-card"}>
                      <img className="lesson-card-img" src={data.bgImage} />
                      <div className="lesson-card-content">
                        <h3>{data.name}</h3>
                        <p>{data.description}</p>
                        <button>{data.lesson}</button>
                      </div>
                    </div>
                    </div>
                  )
                })
              }
    </div>
  );
};


const MoreCourse = () => {
  const moreCourseData = [
    {
      _id: 1,
      name: " Dianne Russell",
      message: "   Write message",
      bgImage: "/img/profile-image-2.svg",
    },

    {
      _id: 2,
      name: " Kristin Watson",
      message: "   Write message",
      bgImage: "/img/profile-image-3.svg",
    },
    {
      _id: 3,
      name: "  Leslie Alexander",
      message: "   Write message",
      bgImage: "/img/profile-image-4.svg",
    },
    {
      _id: 4,
      name: "  Ralph Edwards",
      message: "   Write message",
      bgImage: "/img/profile-image-5.svg",
    },
    {
      _id: 5,
      name: "  Guy Hawkins",
      message: "   Write message",
      bgImage: "/img/profile-image-6.svg",
    },
  ];

  const screenSize = useSizeFinder();

  return (
    <>
      <div className="more-course-feature-container">
        <div className="more-course-feature-title">
          <div className="more-course-title ibmplexsans-semi-bold-quarter-spanish-white-24px">
            Also study this course
          </div>
          <div className="see-all-users ibmplexsans-semi-bold-caribbean-green-16px">
            See all users
          </div>
        </div>
        <div className="more-course-container">
          {moreCourseData.map((data) => {
            return (
              <>
                <div className="more-course">
                  <div className="more-course-wrapper">
                    <div
                      className="more-course-image "
                      style={{ backgroundImage: `url(${data.bgImage})` }}
                    ></div>
                    <div className="more-course-text">
                      <div className="more-course-name ibmplexsans-semi-bold-quarter-spanish-white-16px">
                        {data.name}
                      </div>
                      <div className="more-course-write-message ibmplexsans-semi-bold-caribbean-green-16px">
                        {data.message}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

          {
            screenSize < 650 && <div className="secondary-btn-container margin-left-1"><Secondarybtn name="See all users" /></div>
          }
        
      </div>
    </>
  );
};
