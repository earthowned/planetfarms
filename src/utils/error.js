export const getErrorMessage = (error) => {
  const errorData = error?.response?.data?.error;
  return errorData || error.message;
};
