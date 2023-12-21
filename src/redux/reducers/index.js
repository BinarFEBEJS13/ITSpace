import { combineReducers } from "redux";
import getDataCourses from "./get-data-courses";
import getDataMyEnrollments from "./get-data-my-enrollments";
import getDataDecode from "./get-data-decode";
import getDataChapters from "./get-data-chapters";
import getDataCoursesId from "./get-data-coursesId";
import getDataVideos from "./get-data-videos";

export default combineReducers({
  getDataCourses: getDataCourses,
  getDataCoursesId: getDataCoursesId,
  getDataVideos: getDataVideos,
  getDataChapters: getDataChapters,
  getDataMyEnrollments: getDataMyEnrollments,
  getDataDecode: getDataDecode,
});
