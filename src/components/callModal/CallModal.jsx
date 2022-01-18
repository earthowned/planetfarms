import "./CallModal.scss";

const CallModal = ({ clickHandler }) => {
  return (
    <div className="call-modal-container">
      <div
        className="call-modal"
        style={{ backgroundImage: 'url("img/call-photo.png")' }}
      >
        <div className="img-wrapper">
          <img src="/img/avatar-msg.svg" alt="avatar" />
        </div>

        <div className="call-button">
          <button type="button">
            <img src="/img/users-icon.svg" alt="user-icon" />
          </button>
          <button type="button">
            <img src="/img/video-off-icon.svg" alt="video-off-icon" />
          </button>
          <button type="button">
            <img src="/img/mute-microphone-icon.svg" alt="microphone-icon" />
          </button>
          <button type="button" onClick={() => clickHandler(false)}>
            <img src="/img/end-call-icon.svg" alt="end-call-icon" />
          </button>

          <div className="resize">
            <img src="/img/resize-icon.svg" alt="resize-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallModal;
