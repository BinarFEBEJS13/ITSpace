import { combineReducers } from "redux";
import getDataCourses from "./get-data-courses";
import authLoginSlice from "./authLoginSlice";

export default combineReducers({
  login: authLoginSlice,
  getDataCourses: getDataCourses,
});
