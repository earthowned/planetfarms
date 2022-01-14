import React from "react";
import Button from "../button/Button";

const DeleteContent = ({ heading, message, confirmDelete, setDeleteModal }) => {
  return (
    <div className="settings-modal-container">
      <form className="settings-modal-inner-container">
        <div className="settings-modal-title">
          <h2>{heading}</h2>
          <button onClick={() => setDeleteModal(false)} className="close-btn">
            <img src="/img/close-outline.svg" alt="close-outline" />
          </button>
        </div>
        <p className="settings-modal-message">{message}</p>
        <div className="popup-btn-wrapper">
          <Button
            name="Cancel"
            onClick={() => setDeleteModal(false)}
            className="secondary-btn"
          />
          <Button name="Yes" onClick={() => confirmDelete()} />
        </div>
      </form>
    </div>
  );
};

export default DeleteContent;
