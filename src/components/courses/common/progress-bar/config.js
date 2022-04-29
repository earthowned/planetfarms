export const Progress = {
  None: "None",
  InProgress: "InProgress",
  Completed: "Completed",
};

export const Variant = {
  [Progress.None]: "grey",
  [Progress.InProgress]: "red",
  [Progress.Completed]: "green",
};

export const getProgressType = (progress = 0) => {
  if (!progress || progress === 0) return Progress.None;
  return progress > 0 && progress < 50
    ? Progress.InProgress
    : Progress.Completed;
};
