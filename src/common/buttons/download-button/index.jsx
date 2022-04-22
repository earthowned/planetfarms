import { useMemo } from "react";

import { Icon } from "common/icon";
import { CircularProgress } from "common/progress/circular";

import "./styles.scss";

export const DownloadButton = ({
  onClick,
  isCompleted = false,
  isDownloading = false,
}) => {
  const icon = useMemo(() => {
    return isCompleted ? "checkmark" : "download";
  }, [isCompleted]);

  return (
    <button type="button" className="download-button" onClick={onClick}>
      {!isDownloading && <Icon icon={icon} />}
      {isDownloading && (
        <CircularProgress size={24} variant="green" isInfinite />
      )}
    </button>
  );
};
