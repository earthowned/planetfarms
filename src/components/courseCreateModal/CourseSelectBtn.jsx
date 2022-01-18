import Background from "../background/Background";

const CourseSelectBtn = ({
  courseType,
  courseName,
  desc,
  img,
  setSelectedBtn,
  selectedBtn,
}) => {
  return (
    <button
      type="button"
      onClick={() => setSelectedBtn(`${courseType}`)}
      className={selectedBtn === courseType ? selectedBtn : ""}
    >
      <Background staticImg={`/img/${img}`}>
        <div>
          <h3>{courseName}</h3>
          <p>{desc}</p>
        </div>
      </Background>
    </button>
  );
};

export default CourseSelectBtn;
