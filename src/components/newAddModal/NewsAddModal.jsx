import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { newsUpdate } from "../../actions/newsActions";
import useGetFetchData from "../../utils/useGetFetchData";
import CategoryFilter from "../categoryFilter/CategoryFilter";
import { CATEGORY } from "../../utils/urlConstants";
import "./NewsAddModal.scss";

const NewsAddModal = ({ setAddModal, editData, setEditData }) => {
  const { register, errors, handleSubmit } = useForm();
  const [categoryError, setCategoryError] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const { data: categoryById } = useGetFetchData("CATEGORY_WRT_ID", CATEGORY);

  const getCategory = () => {
    const category = categoryById?.results.find(
      // eslint-disable-next-line radix
      (x) => x.id === parseInt(selectedCategory)
    )?.name;
    return category;
  };

  function clearInput() {
    setEditData(null);
    setAddModal(false);
  }

  const editNewsTitle = ({ title }) => {
    const category = getCategory();
    dispatch(newsUpdate({ id: editData.id, title, category }));
    clearInput();
  };

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

  return (
    <div className="news-modal-container">
      <form className="news-modal-inner-container">
        <div className="news-modal-header">
          <h4>Add news</h4>
          <img
            src="/img/close-outline.svg"
            alt="close-icon"
            onClick={clearInput}
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
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            classname="newsCategory"
          />
          {categoryError && <p className="error">{categoryError}</p>}
        </div>
        {editData ? (
          <button
            type="button"
            className="default-btn-btn btn-variation"
            onClick={handleSubmit(editNewsTitle)}
          >
            Update
          </button>
        ) : (
          <button
            type="button"
            className="default-btn-btn btn-variation"
            onClick={handleSubmit(AddNews)}
          >
            Continue
          </button>
        )}
      </form>
    </div>
  );
};

export default NewsAddModal;
