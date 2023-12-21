import { reduxGetDataCoursesId } from "../../services/get-data-courseId";
import { setCoursesId } from "../reducers/get-data-coursesId";

export const actGetDataCoursesId = (courseId) => async (dispatch) => {
  reduxGetDataCoursesId(courseId)
    .then((result) => {
      dispatch(setCoursesId(result?.data?.data));
    })
    .catch((err) => {
      return err;
    });
};
