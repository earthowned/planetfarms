import "./styles.scss";

export const ButtonsContainer = ({ label, children }) => (
  <div className="auth-action-buttons-container">
    {label && <h5>{label}</h5>}
    <div className="buttons-container">{children}</div>
  </div>
);
