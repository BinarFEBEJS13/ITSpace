import { combineReducers } from "redux";
import getDataCourses from "./get-data-courses";
import getDataMyEnrollments from "./get-data-my-enrollments";

export default combineReducers({
  getDataCourses: getDataCourses,
  getDataMyEnrollments: getDataMyEnrollments,
});
