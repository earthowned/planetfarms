export const getFilesData = (files) => {
  const data = [];

  files.forEach(({ file, id }) => {
    const splitted = file.name.split(".");
    const fileData = {
      id,
      name: splitted[0],
      extension: splitted[splitted.length - 1],
    };
    data.push(fileData);
  });

  return data;
};
