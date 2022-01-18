/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import Button from "../button/Button";
import DragDrop from "../dragDrop/DragDrop";
import CollectionModalHeader from "./CollectionModalHeader";
import { TextArea } from "../formUI/FormUI";

import "./NewsCreateModal.scss";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import { LESSON_IMG } from "../../utils/urlConstants";

const CreateImage = ({
  imageActive,
  setImageActive,
  data,
  setData,
  editData,
  setEditData,
  editFunc,
}) => {
  const [isImgDesc, setIsImgDesc] = useState(true);
  const [lessonImg, setLessonImg] = useState(
    editData.length > 0
      ? editData[0]?.itemId
        ? editData[0]?.lessonImg
        : `${LESSON_IMG}${editData[0].lessonImg}`
      : ""
  );
  const { register, handleSubmit } = useForm();

  const submitLessonImg = ({ photoDescription }) => {
    const itemId =
      data.length === 0 ? data.length + 1 : data[data.length - 1].itemId + 1;
    const imgData = [
      ...data,
      {
        itemId,
        lessonImg,
        photoDescription,
        isImgDesc,
      },
    ];
    setData(imgData);
    setImageActive(false);
  };

  const editNewsImg = ({ photoDescription }) => {
    editFunc({ id: editData[0].id, lessonImg, photoDescription, isImgDesc });
    setEditData([]);
  };

  useEffect(() => {
    if (editData.length > 0) {
      setIsImgDesc(editData[0].isImgDesc);
    }
  }, []);

  const closeModal = () => {
    setImageActive(false);
    setEditData([]);
  };
  const editLocal = ({ photoDescription }) => {
    if (editData.length !== 0) {
      editData[0].lessonImg = lessonImg;
      editData[0].photoDescription = photoDescription;
      editData[0].isImgDesc = isImgDesc;
    }
    setImageActive(false);
    setEditData([]);
  };
  return (
    <>
      {imageActive && (
        <div className="collection-modal-container addBlock">
          <div className="block">
            <div className="collection-modal-inner-container">
              <CollectionModalHeader
                title="Add photo"
                clickHandler={closeModal}
              />
              <DragDrop
                onChange={(img) => setLessonImg(img)}
                fileType="image/png,image/jpeg,image/jpg"
                text="Drag & Drop photo in this area or Click Here to attach"
                dataImg={
                  editData.length > 0
                    ? editData[0]?.itemId
                      ? editData[0]?.lessonImg?.preview
                      : `${LESSON_IMG}${editData[0].lessonImg}`
                    : ""
                }
                onClick={() => setLessonImg(null)}
              />
              <div className="description">
                <label>Add photo description ?</label>{" "}
                <ToggleSwitch
                  onClick={() => setIsImgDesc(!isImgDesc)}
                  isFree={isImgDesc}
                />
              </div>
              {isImgDesc && (
                <div className="photo-input-container">
                  <TextArea
                    defaultValue={
                      editData.length > 0 ? editData[0].photoDescription : ""
                    }
                    placeholder="Photo Description (Optional)"
                    className="default-input-variation text-area-variation textarea"
                    cols="3"
                    rows="3"
                    name="photoDescription"
                    ref={register}
                  />
                </div>
              )}

              {editData.length > 0 ? (
                <Button
                  className="add"
                  name="Edit Photo Block"
                  onClick={handleSubmit(
                    editData[0]?.itemId ? editLocal : editNewsImg
                  )}
                />
              ) : (
                <Button
                  className="add"
                  name="Add Photo Block"
                  onClick={handleSubmit(submitLessonImg)}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateImage;
