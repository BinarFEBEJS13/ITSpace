import { reduxGetDataChapters } from "../../services/get-data-chapters";
import { setChapters } from "../reducers/get-data-chapters";

export const actGetDataChapters = (courseId) => async (dispatch) => {
  reduxGetDataChapters(courseId)
    .then((result) => {
      dispatch(setChapters(result?.data?.data));
    })
    .catch((err) => {
      return err;
    });
};
