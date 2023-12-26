
import { reduxGetUsers } from '../../services/users/get-user';
import { setDataUser } from '../reducers/getUsersSlice';

export const GetUsers = (id) => (dispatch) => {
  reduxGetUsers(id).then((result) => {
    console.log(result, "ini result get")
    return dispatch(setDataUser(result?.data?.data))
  }).catch((err) => {
    console.log(err)
  });
}
