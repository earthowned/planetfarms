import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../button/Button";
import LessonCourseSingle, {
  BluredLessonCard,
  UnbluredLessonCard,
} from "./LessonCourseSingle";

const LessonCourse = ({
  data,
  setPurchaseModal,
  isEnroll,
  userInfo,
  creator,
  joinCourse,
  enrolls,
}) => {
  const lessonLen = data?.data?.lessons.length;

  const history = useHistory();
  const seeLessonHandler = async (lessonId) => {
    history.push(`/lesson/${lessonId}`);
  };
  return lessonLen < 1 ? (
    <></>
  ) : (
    <div className="lessons-container">
      {data?.data?.isFree === false ? (
        <div className="purchase-course-wrapper">
          <div className="purchase-course">
            <h4>
              Buy this course for <span>${data?.data?.price}</span>
            </h4>
            <div>
              <Button
                name="Buy Course"
                onClick={() => setPurchaseModal(true)}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <h3>Lessons</h3>
      {isEnroll ? (
        <>
          <UnbluredLessonCard
            data={data?.data?.lessons[0]}
            seeLessonHandler={seeLessonHandler}
          />
          {data?.data?.lessons.slice(1).map((item) => (
            <React.Fragment key={item.id}>
              <LessonCourseSingle
                data={item}
                userInfo={userInfo}
                creator={creator}
                isEnroll={isEnroll}
                joinCourse={joinCourse}
                enrolls={enrolls}
                seeLessonHandler={seeLessonHandler}
              />
            </React.Fragment>
          ))}
        </>
      ) : (
        data?.data?.lessons.map((item) => (
          <React.Fragment key={item.id}>
            <BluredLessonCard data={item} />
          </React.Fragment>
        ))
      )}
    </div>
  );
};
export default LessonCourse;
