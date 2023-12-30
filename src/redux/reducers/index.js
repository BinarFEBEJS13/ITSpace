import { combineReducers } from "redux";
import getDataCourses from "./get-data-courses";

import getUsersSlice from "./getUsersSlice";


export default combineReducers({

  users: getUsersSlice,
  getDataCourses: getDataCourses,
});

