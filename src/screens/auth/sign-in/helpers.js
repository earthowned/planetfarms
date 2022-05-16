export const isNonConfirmedError = (error) => {
  return error && error.code === "UserNotConfirmedException";
};
