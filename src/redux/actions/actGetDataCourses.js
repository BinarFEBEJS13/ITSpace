import { reduxGetDataCourses } from "../../services/get-data-courses";
import { setCourses } from "../reducers/get-data-courses";

export const actGetDataCourses = () => async (dispatch) => {
  reduxGetDataCourses()
    .then((result) => {
      dispatch(setCourses(result?.data?.data?.courses));
    })
    .catch((err) => {
      return err;
    });
};
