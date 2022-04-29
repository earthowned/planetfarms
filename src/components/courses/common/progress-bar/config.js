export const Progress = {
  None: "None",
  Completed: "Completed",
  InProgress: "InProgress",
  PartlyCompleted: "PartlyCompleted",
};

export const Variant = {
  [Progress.None]: "grey",
  [Progress.InProgress]: "red",
  [Progress.Completed]: "green",
  [Progress.PartlyCompleted]: "green",
};

export const getProgressType = (progress = 0) => {
  if (!progress || progress === 0) return Progress.None;

  if (progress > 0 && progress < 50) return Progress.InProgress;
  if (progress > 50 && progress < 100) return Progress.PartlyCompleted;

  return Progress.Completed;
};
