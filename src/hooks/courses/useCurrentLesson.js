import { useEffect } from "react";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useStateIfMounted } from "hooks";
import { getErrorMessage } from "utils/error";
import { selectCoursesList } from "store/courses";
import { setIsLoading } from "store/loader/slices";
import { selectCurrentUser } from "store/user/selectors";

// TODO: Fetch Lesson from BE;

const fetchLesson = ({ courses, courseId, lessonId }) => {
  const course = courses.find((item) => item.id === courseId);
  return course?.lessons?.find((item) => item.id === lessonId) || null;
};

export const useCurrentLesson = ({ courseId, lessonId }) => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const courses = useSelector(selectCoursesList);
  const currentUser = useSelector(selectCurrentUser);

  const [lesson, setLesson] = useStateIfMounted(null);
  const [isMyLesson, setIsMyLesson] = useStateIfMounted(false);

  useEffect(async () => {
    if (!courseId || !lessonId || courses.length === 0) {
      history.goBack();
      return;
    }

    try {
      dispatch(setIsLoading(true));
      const currentLesson = fetchLesson({ courses, courseId, lessonId });

      setLesson(currentLesson);
      setIsMyLesson(currentLesson?.author?.id === currentUser?.userID);
    } catch (error) {
      alert.error(getErrorMessage(error));
      history.goBack();
    } finally {
      dispatch(setIsLoading(false));
    }
  }, [courseId, lessonId, courses, currentUser]);

  return { lesson, isMyLesson };
};
