import { InputField } from "common/input";

import "./styles.scss";

export const InputsContainer = ({ inputs, children }) => {
  return (
    <div className="auth-inputs-container">
      {inputs.map((data, index) => (
        <InputField key={`auth-inputs-${index.toString()}`} {...data} />
      ))}
      {children && <div className="bottom-container">{children}</div>}
    </div>
  );
};
