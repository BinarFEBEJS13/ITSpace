import { combineReducers } from "redux";
import getDataCourses from "./get-data-courses";

export default combineReducers({
  getDataCourses: getDataCourses,
});
