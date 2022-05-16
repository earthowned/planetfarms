import { useEffect } from "react";
import { useAlert } from "react-alert";
// import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { api } from "api";
import { getErrorMessage } from "utils/error";
import { useStateIfMounted } from "hooks/useStateIfMounted";

export const useCourse = ({ id }) => {
  const alert = useAlert();
  const history = useHistory();
  // const dispatch = useDispatch();

  const [course, setCourse] = useStateIfMounted(null);

  const fetchCourse = async (courseId) => {
    try {
      // TODO: setIsLoading(true);

      const response = await api.courses.get({ id: courseId });
      setCourse({ ...response });
    } catch (error) {
      alert.error(getErrorMessage(error));
      history.goBack();
    } finally {
      // TODO: setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourse(id);
  }, [id]);

  return { course, fetchCourse };
};
