import { useMemo } from "react";
import cx from "classnames";

import { Icon } from "common/icon";
import { DeviceType } from "constants/enums";
import { isFileInstanse } from "utils/parsers/file";

import "./styles.scss";

export const Dropzone = ({
  icon,
  file,
  device,
  rootProps,
  inputProps,
  placeholder,
  downloadUrl,
  mobilePlaceholder,
  withError = false,
}) => {
  const isMobile = useMemo(() => device === DeviceType.Mobile, [device]);

  const containerClassName = useMemo(() => {
    const className = isMobile ? "mobile-drop-zone" : "desktop-drop-zone";
    return cx(className, {
      [`${className}-with-file`]: isMobile && !!file,
      [`${className}-with-error`]: withError,
    });
  }, [withError, file, isMobile]);

  const content = useMemo(() => {
    if (!file && isMobile) {
      return (
        <div className="mobile-placeholders">
          <Icon icon={icon} />
          <h4>{mobilePlaceholder}</h4>
        </div>
      );
    }

    if (!file && !isMobile) {
      return (
        <div className="placeholders-container">
          <h5>{placeholder}</h5>
          <h4>Click Here to attach</h4>
        </div>
      );
    }

    const getImageSrc = () => {
      if (isFileInstanse(file)) return URL.createObjectURL(file);
      if (downloadUrl && file) return `${downloadUrl}${file}`;
      return file;
    };

    return (
      <div className="image-container">
        <img alt="" src={getImageSrc()} />
      </div>
    );
  }, [file, isMobile, placeholder, mobilePlaceholder, icon]);

  return (
    <div className={containerClassName} {...rootProps}>
      {!file && <input {...inputProps} />}
      {content}
    </div>
  );
};
