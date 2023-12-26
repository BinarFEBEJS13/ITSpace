import { combineReducers } from "redux";
import getDataCourses from "./get-data-courses";
import authLoginSlice from "./authLoginSlice";
import getUsersSlice from "./getUsersSlice";


export default combineReducers({
  login: authLoginSlice,
  users: getUsersSlice,
  getDataCourses: getDataCourses,
});
