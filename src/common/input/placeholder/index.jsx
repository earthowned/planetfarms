import cx from "classnames";

export const FloatingPlaceholder = ({
  value,
  placeholder,
  required = false,
}) => {
  const className = "pf-floating-placeholder";

  const placeholderClassName = cx(className, {
    [`${className}-with-value`]: !!value,
  });

  return (
    <div className={placeholderClassName}>
      <p>{placeholder}</p>
      {required && <p className="required">*</p>}
    </div>
  );
};
