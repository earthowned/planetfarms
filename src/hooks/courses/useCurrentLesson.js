import { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { useStateIfMounted } from "hooks";
import { getErrorMessage } from "utils/error";
import { selectCoursesList } from "store/courses";
import { setIsLoading } from "store/loader/slices";

export const useCurrentLesson = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const { courseId, lessonId } = useParams();

  const courses = useSelector(selectCoursesList);
  const [lesson, setLesson] = useStateIfMounted(null);

  useEffect(async () => {
    if (!courseId || !lessonId || courses.length === 0) {
      history.goBack();
      return;
    }

    try {
      dispatch(setIsLoading(true));
      // const response = await api.courses.lesson({ lessonId })

      const course = courses.find((item) => item.id === courseId);
      const currentLesson = course?.lessons?.find(
        (item) => item.id === lessonId
      );

      setLesson(currentLesson);
    } catch (error) {
      alert.error(getErrorMessage(error));
      history.goBack();
    } finally {
      dispatch(setIsLoading(false));
    }
  }, [courseId, lessonId, courses]);

  return lesson;
};
