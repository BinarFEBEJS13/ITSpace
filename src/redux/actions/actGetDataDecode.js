import { reduxGetDataDecode } from "../../services/get-data-decode";
import { setDecode } from "../reducers/get-data-decode";

export const actGetDataDecode = () => async (dispatch) => {
  reduxGetDataDecode()
    .then((result) => {
      dispatch(setDecode(result?.data?.data));
    })
    .catch((err) => {
      return err;
    });
};
