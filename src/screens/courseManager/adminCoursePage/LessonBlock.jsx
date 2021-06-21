import { useHistory } from "react-router-dom";

const LessonBlock = () => {
  const history = useHistory();
  return (
    <div className="admin-course-page-container">
      <div className="admin-lesson-lists-container">
        <h3>Lessons</h3>
        <div className="admin-lesson">
          <div>
            <img src="/img/lesson-card2.svg" className="lesson image" />
            <div>
              <h4>01.Introducing</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud{" "}
              </p>
              <button className="text-btn">See lesson</button>
            </div>
          </div>
          <button className="secondary-btn lesson-btn">
            <img src="/img/more-horizontal.svg" alt="horizontal icon" />
          </button>
        </div>
        <div
          className="add-lesson-btn secondary-btn"
          onClick={() => history.push("/admin/lesson-page")}
        >
          <img src="/img/plus.svg" alt="lesson add" />
          <span>Add new lesson for users</span>
        </div>
      </div>
    </div>
  );
};

export default LessonBlock;
