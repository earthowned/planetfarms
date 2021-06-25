import { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";

import { createLesson } from "../../../actions/lessonActions";

import AddTestModal from "../../../Components/AddTestModal/AddTestModal";
import BackButton from "../../../Components/BackButton/BackButton";
import DragDrop from "../../../Components/DragDrop/DragDrop";
import NewsCreateModal from "../../../Components/NewsCreateModal/NewsCreateModal";
import DashboardLayout from "../../../Layout/DashboardLayout/DashboardLayout";
import { ErrorText } from "../../../Components/FormUI/FormUI";
import "./add-lesson.css";

const AddLesson = () => {
  const dispatch = useDispatch();
  const { courseId: ID } = useParams();

  const [videoModal, setVideoModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [textModal, setTextModal] = useState(false);
  const [testModal, setTestModal] = useState(false);
  const [videoData, setVideoData] = useState([]);
  // const [useStep, setUseStep] = useState(0);
  const [lessonCover, setLessonCover] = useState(null);

  const { register, errors, handleSubmit } = useForm();

  const submitLessonForm = ({ title }) => {
    const courseId = ID;
    const lessonId = uuid();
    const coverImg = lessonCover;
    const steps = {
      videos: videoData,
    };
    dispatch(
      createLesson({
        title,
        courseId,
        lessonId,
        coverImg,
        steps,
      })
    );
  };

  return (
    <>
      {videoModal && (
        <NewsCreateModal
          type="video"
          videoActive={videoModal}
          setVideoActive={setVideoModal}
          setVideoData={setVideoData}
          videoData={videoData}
        />
      )}
      {imageModal && (
        <NewsCreateModal
          type="image"
          imageActive={imageModal}
          setImageActive={setImageModal}
        />
      )}
      {testModal && <AddTestModal setTestModal={setTestModal} />}
      {textModal && (
        <NewsCreateModal
          type="text"
          textActive={textModal}
          setTextActive={setTextModal}
        />
      )}
      <DashboardLayout title="Add new lesson">
        <BackButton location={`/admin/course/${ID}`} />

        <AddContent
          setVideoModal={setVideoModal}
          setImageModal={setImageModal}
          setTextModal={setTextModal}
          setTestModal={setTestModal}
          register={register}
          errors={errors}
          setLessonCover={setLessonCover}
          lessonCover={lessonCover}
        />
        <LessonMaterial />
        <LessonSaveModal onClick={handleSubmit(submitLessonForm)} />
      </DashboardLayout>
    </>
  );
};

const AddContent = ({
  setVideoModal,
  setImageModal,
  setTextModal,
  setTestModal,
  register,
  errors,
  setLessonCover,
}) => {
  return (
    <div className="admin-lesson-create-container">
      <input
        type="text"
        placeholder="Write title here"
        name="title"
        ref={register({
          required: {
            value: true,
            message: "You must enter lesson title",
          },
        })}
      />
      <ErrorText
        className="errorMsg"
        message={errors.title && errors.title.message}
      />
      <DragDrop onChange={(img) => setLessonCover(img)} />
      <div className="admin-lesson-create-btn-wrapper">
        <button className="secondary-btn" onClick={() => setVideoModal(true)}>
          <img src="/img/video-outline.svg" alt="video icon" />{" "}
          <span>Add video</span>
        </button>
        <button className="secondary-btn" onClick={() => setImageModal(true)}>
          <img src="/img/image-outline.svg" alt="image_icon" />
          <span>Add image</span>
        </button>
        <button className="secondary-btn" onClick={() => setTextModal(true)}>
          <img src="/img/text-outline.svg" alt="text icon" />{" "}
          <span>Add text</span>
        </button>
        <button className="secondary-btn" onClick={() => setTestModal(true)}>
          <img src="/img/test-outline.svg" alt="test icon" />{" "}
          <span>Add test</span>
        </button>
      </div>
    </div>
  );
};

const LessonMaterial = () => {
  return (
    <div className="admin-lesson-materials-container">
      <h1>Materials</h1>
      <p>You dont have any materials in lesson Add it for your users.</p>
      <button className="secondary-btn">Add materials</button>
    </div>
  );
};

const LessonSaveModal = ({ onClick }) => {
  return (
    <div className="save-lesson-modal">
      <h4>Do you want to save lesson?</h4>
      <div>
        <button className="secondary-btn" id="lesson-cancel-btn">
          Cancel
        </button>
        <button
          className="primary-btn secondary-btn"
          id="lesson-save-btn"
          onClick={onClick}
        >
          Save lesson
        </button>
      </div>
    </div>
  );
};

export default AddLesson;
