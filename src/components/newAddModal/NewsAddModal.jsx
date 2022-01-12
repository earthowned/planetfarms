import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import Button from "../button/Button";
import CategoryFilter from "../categoryFilter/CategoryFilter";

import { CATEGORY } from "../../utils/urlConstants";
import { newsUpdate } from "../../actions/newsActions";
import useGetFetchData from "../../utils/useGetFetchData";

import "./NewsAddModal.scss";

const NewsAddModal = ({ setAddModal, editData, setEditData }) => {
  const { register, errors, handleSubmit } = useForm();
  const [categoryError, setCategoryError] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const editNewsTitle = ({ title }) => {
    const category = getCategory();
    dispatch(newsUpdate({ id: editData.id, title, category }));
    clearInput();
  };
  function clearInput() {
    setEditData(null);
    setAddModal(false);
  }
  const { data: categoryById } = useGetFetchData("CATEGORY_WRT_ID", CATEGORY);
  useEffect(() => {
    if (selectedCategory.length !== 0) {
      setCategoryError("");
    }
  }, [selectedCategory]);
  const AddNews = ({ title }) => {
    setCategoryError(
      selectedCategory.length === 0 ? "Please select a category" : ""
    );
    const category = getCategory();
    history.push({
      pathname: "/news/add",
      state: {
        category,
        title,
      },
    });
  };
  const getCategory = () => {
    const category = categoryById?.results.find(
      (x) => x.id === parseInt(selectedCategory)
    )?.name;
    return category;
  };

  return (
    <div className="news-modal-container">
      <form className="news-modal-inner-container">
        <div className="news-modal-header">
          <h3>Add news</h3>

          <img
            alt="close-icon"
            onClick={clearInput}
            src="/img/close-outline.svg"
          />
        </div>

        <div className="news-modal-content">
          <input
            className={errors.title ? "input errorBox" : "input"}
            placeholder="News title*"
            name="title"
            ref={register({
              required: {
                value: true,
                message: "You must enter news title",
              },
            })}
          />

          {errors.title && <p className="error">{errors.title.message}</p>}

          <CategoryFilter
            classname="newsCategory"
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {categoryError && <p className="error">{categoryError}</p>}
        </div>

        <Button
          type="submit"
          className="action-btn"
          name={editData ? "Update" : "Continue"}
          onClick={
            editData ? handleSubmit(editNewsTitle) : handleSubmit(AddNews)
          }
        />
      </form>
    </div>
  );
};

export default NewsAddModal;
