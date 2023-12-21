import { reduxGetDataVideos } from "../../services/get-data-videos";
import { setVideos } from "../reducers/get-data-videos";

export const actGetDataVideos = (courseId, chaptersId, videosId) => async (dispatch) => {
  reduxGetDataVideos(courseId, chaptersId, videosId)
    .then((result) => {
      dispatch(setVideos(result?.data?.data));
    })
    .catch((err) => {
      return err;
    });
};
