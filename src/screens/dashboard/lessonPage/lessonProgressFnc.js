export default function addUpdateLesson({
  dispatch,
  action,
  lessonId,
  userId,
  isCompleted,
  startTime,
  endTime,
  progressId,
  nextId,
  history,
  refetch,
}) {
  return dispatch(
    action({
      lessonId,
      userId,
      isCompleted,
      startTime,
      endTime,
      progressId,
      nextId,
      history,
      refetch,
    })
  );
}
