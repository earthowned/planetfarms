import { Input } from "common/input";
import { AuthLayout } from "layout/auth-layout";

import "./styles.scss";

const inputs = [
  {
    type: "text",
    placeholder: "First Name",
  },
  {
    type: "text",
    placeholder: "Last Name",
  },
  {
    type: "email",
    placeholder: "Email",
  },
  {
    type: "phone",
    placeholder: "Phone Number",
  },
  {
    type: "text",
    placeholder: "Birthday",
  },
];

export const CongratulationsPage = () => {
  return (
    <AuthLayout
      withLogo={false}
      title="Congratulations!"
      subtitle="Please fill these fields to communicate with other people easier:"
    >
      <div className="congratulations-page-container">
        <div className="wrap-content">
          <div className="drag-drop-container" />
          <div className="inputs">
            {inputs.map((item) => (
              <Input
                placeholder={item.placeholder}
                type={item.type}
                key={item.placeholder}
              />
            ))}
          </div>
        </div>

        <div className="buttons" />
      </div>
    </AuthLayout>
  );
};

/* <div className="inputs">
        {inputs.map((item) => (
          <Input
            placeholder={item.placeholder}
            type={item.type}
            key={item.placeholder}
          />
        ))}
      </div> */
