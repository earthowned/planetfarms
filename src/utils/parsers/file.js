export const isFileInstanse = (object) => {
  if (!object) return false;
  return "File" in window && object instanceof File;
};
