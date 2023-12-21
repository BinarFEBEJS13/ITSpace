import { reduxGetDataMyEnrollments } from "../../services/get-data-my-enrollments";
import { setMyEnrollments } from "../reducers/get-data-my-enrollments";

export const actGetDataMyEnrollments = () => async (dispatch) => {
  reduxGetDataMyEnrollments()
    .then((result) => {
      dispatch(setMyEnrollments(result?.data?.data?.courses));
    })
    .catch((err) => {
      return err;
    });
};
