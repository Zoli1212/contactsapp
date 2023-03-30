import { LOGOUT } from "../../../constants/actiontypes";


export default (navigate) => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT.USER,
  });
  navigate("/auth/login");
};