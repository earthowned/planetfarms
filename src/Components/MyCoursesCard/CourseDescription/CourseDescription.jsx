import React from "react";
import "./course-description.css";

const CourseDescription = () => {
  return (
    <>
      <div className="course-page-container border-1px-onyx">
        {courseDetail()}
        {lessonCourse()}
      </div>
      {moreCourse()}
    </>
  );
};

export default CourseDescription;

const courseDetail = () => {
  return (
    <div>
      <div className="description-course-page">
        <div className="bg-image"></div>
        <div className="course-details-wrapper">
          <div className="course-description">
            <h1 className="course-page-name">Jimmy Beam personal course</h1>
            <p className="course-page-description ibmplexsans-regular-normal-quarter-spanish-white-16px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla.
            </p>

            <div className="course-bar">
              <div className="course-bar-wrapper ">
                <div className=" green-line-2"></div>
                <div className="green-line-1"></div>
                <div className="green-line "></div>
                <div className="green-line-3"></div>

                <div className={` lesson-indicator`}>
                  <img
                    className="ellipse-round-icon"
                    src="/img/ellipse-round-icon.svg" 
                    alt="ellipse-round-icon"
                  />
                  <div className="lesson-text valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                    Lesson 2
                  </div>
                </div>

                <div className={`lesson-indicator lesson-3 `}>
                  <img
                    className="ellipse-round-icon"
                    src="/img/ellipse-round-icon.svg"
                    alt="ellipse-round-icon"
                  />
                  <div className="lesson-text valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                    Lesson 3
                  </div>
                </div>

                <div className={`lesson-indicator lesson-4 `}>
                  <img
                    className="ellipse-round-icon"
                    src="/img/ellipse-round-icon.svg"
                    alt="ellipse-round-icon"
                  />
                  <div className="lesson-text valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                    Lesson 4
                  </div>
                </div>

                <div className="final-test">
                  <img
                    className="ellipse-703"
                    src="/img/ellipse-round-icon.svg"
                    alt="ellipse-round-icon"
                  />
                  <div className="final-test-text valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                    Final test
                  </div>
                </div>
                <div className="lesson-1">
                  <div
                    className="component-3"
                    style={{
                      backgroundImage: `url("/img/ellipse-round-icon.svg")`,
                    }}
                  >
                    <img
                      className="ellipse-icon"
                      src="/img/ellipse-icon.svg"
                      alt="ellipse-icon"
                    />
                  </div>
                  <div className="lesson-1-text valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                    Lesson 1
                  </div>
                </div>
              </div>
            </div>
            <div className="course-page-boderline"></div>
          </div>
          <div className="subscriber-btn border-0-5px-quarter-spanish-white">
            <div className="subscriber-btn-text ibmplexsans-semi-bold-quarter-spanish-white-16px">
              You are subscriber
            </div>
            <div className="layer-2">
              <img src="/img/chevron-right-outline.svg" className3="course-arrow-icon" alt="right-arrow-icon" />
            </div>
          </div>
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
    <>
      <div className="lessons-container">
        <div className="lessons-title ibmplexsans-semi-bold-quarter-spanish-white-24px">
          Lessons
        </div>
        {lessonData.map((data) => {
          return (
            <>
              <div className={`${data.className1} : " " `}>
                <div className={`${data.className2} : "" `}>
                  <div className={`lesson-intro ${data.className3}  } }`}>
                    <img className="lesson-image" src={data.bgImage} />
                    <div className="lesson-name">
                      <div className="lesson-name-text valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-24px">
                        {data.name}
                      </div>
                      <p className="lesson-description valign-text-middle ibmplexsans-regular-normal-quarter-spanish-white-16px">
                        {data.description}
                      </p>
                      <div className="see-lesson-text ibmplexsans-semi-bold-caribbean-green-16px">
                        {data.lesson}
                      </div>
                    </div>
                  </div>
                  {data.finish && (
                    <div className="lock-icon-wrapper">
                      <div className="lock-outline">
                        <div className=" icon-lock">
                          <img src="img/lock-white-outlined.svg" />
                        </div>
                      </div>
                      <div className="unlock-text valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                        {data.finish}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

const moreCourse = () => {
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

  return (
    <>
      <div className="more-course-feature-container border-1px-onyx">
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

        <div className="text valign-text-middle"></div>
      </div>
    </>
  );
};
