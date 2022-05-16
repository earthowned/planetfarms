export const isFileInstanse = (object) => {
  if (!object) return false;
  return object instanceof File;
  // return "File" in window && object instanceof File;
};
