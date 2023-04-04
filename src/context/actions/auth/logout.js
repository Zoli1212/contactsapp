import { LOGOUT } from "../../../constants/actiontypes";


export default (navigate) => (dispatch) => (authDispatch) => {
  localStorage.removeItem("token");
  authDispatch({
    type: LOGOUT.LOGOUT
  })
  
  dispatch({
    type: LOGOUT.LOGOUT,
  });
  return navigate("/auth/login");
};