import { GET_COVERIMG } from "../../../utils/urlConstants";

const LessonCourseSingle = ({ data, seeLessonHandler }) => {
  return (
    <>
      <div className="lesson-card-wrapper">
        <div
          className={
            data?.lesson_progresses.length === 0
              ? "lesson-card lock-active"
              : "lesson-card"
          }
        >
          {data?.lesson_progresses.length === 0 ? (
            <>
              <div className="blur-lesson" />
              <div className="lessonCoverImg">
                <div className="lock-lesson-content">
                  <img
                    className="lock-img"
                    src="/img/lesson-lock.svg"
                    alt="lesson"
                  />
                  <h4>Finish Previous Lesson</h4>
                </div>
                <LessonCard data={data} />
              </div>
            </>
          ) : (
            <div className="lessonCoverImg">
              <LessonCard data={data} />
            </div>
          )}
          <div className="lesson-card-content">
            <h3>{data.title}</h3>
            {data.lessonDesc && <p>{data.lessonDesc}</p>}
            <button type="button" onClick={() => seeLessonHandler(data.id)}>
              See Lesson
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const LessonCard = ({ data }) => {
  return (
    <>
      {data.coverImg ? (
        <img
          className="lesson-card-img"
          src={`${GET_COVERIMG}${data.coverImg}`}
          alt="background"
        />
      ) : (
        <div className="coverImg coverImg__text lessonImg">
          <div>
            <p>{data.title}</p>
          </div>
        </div>
      )}
    </>
  );
};

export const UnbluredLessonCard = ({ data, seeLessonHandler }) => {
  return (
    <div className="lesson-card-wrapper">
      <div className="lesson-card">
        <div className="lessonCoverImg">
          <LessonCard data={data} />
        </div>
        <div className="lesson-card-content">
          <h3>{data.title}</h3>
          {data.lessonDesc && <p>{data.lessonDesc}</p>}
          <button type="button" onClick={() => seeLessonHandler(data.id)}>
            See Lesson
          </button>
        </div>
      </div>
    </div>
  );
};

export const BluredLessonCard = ({ data }) => {
  return (
    <div className="lesson-card-wrapper">
      <div className="lesson-card lock-active">
        <div className="blur-lesson" />
        <div className="lessonCoverImg">
          <div className="lock-lesson-content">
            <img className="lock-img" src="/img/lesson-lock.svg" alt="lesson" />
            <h4>Finish Previous Lesson</h4>
          </div>
          <LessonCard data={data} />
        </div>
        <div className="lesson-card-content">
          <h3>{data.title}</h3>
          {data.lessonDesc && <p>{data.lessonDesc}</p>}
          <button type="button">See Lesson</button>
        </div>
      </div>
    </div>
  );
};
export default LessonCourseSingle;
