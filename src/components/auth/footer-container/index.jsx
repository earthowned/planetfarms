import "./styles.scss";

export const FooterContainer = ({ title, children }) => (
  <div className="auth-footer-container">
    {title && <h5>{title}</h5>}
    {children && children}
  </div>
);
