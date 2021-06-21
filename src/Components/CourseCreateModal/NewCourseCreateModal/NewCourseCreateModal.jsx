import { useState } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";

import { CATEGORY } from "../../../utils/urlConstants";
import { createResource } from "../../../actions/courseActions";
import useGetFetchData from "../../../utils/useGetFetchData";

import DragDrop from "../../DragDrop/DragDrop";
import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch";
import "./newCourseCreateModal.scss";

const NewCourseCreateModal = ({ collectionAdded, clickHandler }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isFree, setIsFree] = useState(false);
  const [courseImage, setCourseImage] = useState("");

  const { register, errors, handleSubmit } = useForm();

  const { data: res } = useGetFetchData("category", CATEGORY);

  // TODO: remove this comment after page not found component is created
  // error && history.push("/pagenotfound")

  const submitForm = ({ title, category, description, price }) => {
    const thumbnail = courseImage;
    const courseId = uuid();
    dispatch(
      createResource({
        title,
        category,
        description,
        price,
        thumbnail,
        isFree,
        courseId,
      })
    );

    history.push(`/admin/course/${courseId}`);
  };

  return (
    <div className="newCourse">
      <form className="container" onSubmit={handleSubmit(submitForm)}>
        <div className="header">
          <h2>Usual course</h2>
          <img
            src="/img/close-outline.svg"
            onClick={() => clickHandler(false)}
            alt="close-icon"
          />
        </div>
        <DragDrop onChange={(img) => setCourseImage(img)} />
        <div className="inputContainer">
          <input
            className={errors.title ? "input errorBox" : "input"}
            placeholder="Course title*"
            name="title"
            ref={register({
              required: {
                value: true,
                message: "You must enter course title",
              },
            })}
          />
          <p className="error">{errors.title && errors.title.message}</p>
          <select
            name="category"
            className={
              errors.category
                ? "input input-select errorBox"
                : "input input-select"
            }
            placeholder="Select Category*"
            ref={register({
              required: "You must select Category",
            })}
            defaultValue="Select Category"
          >
            <option defaultValue="" disabled>
              Select Category
            </option>
            {res?.results.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <p className="error">{errors.category && errors.category.message}</p>

          <textarea
            className={errors.description ? "errorBox" : ""}
            placeholder="Course description"
            name="description"
            ref={register({
              required: {
                value: true,
                message: "You must add description",
              },
            })}
          />
          <p className="error">
            {errors.description && errors.description.message}
          </p>
          <div className="new-course-toggle">
            <h4>Free course</h4>
            <ToggleSwitch onClick={() => setIsFree(!isFree)} isFree={isFree} />
          </div>
          {!isFree && (
            <input
              type="number"
              name="price"
              className={errors.price ? "input errorBox" : "input"}
              placeholder="Course price"
              ref={register({
                required: {
                  value: true,
                  message: "You must enter price",
                },
              })}
            />
          )}
          <p className="error">{errors.price && errors.price.message}</p>
        </div>
        <button className="default-btn btn-size">Create course</button>
      </form>
    </div>
  );
};

export default NewCourseCreateModal;
