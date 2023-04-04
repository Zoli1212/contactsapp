
import {
  LOGIN
} from "../../../constants/actiontypes";
import axiosInstance from "../../../helpers/axiosInstance";
export const login = ({ password, username }) => (dispatch) => {

    console.log(username, password)
    console.log(axiosInstance)
  dispatch({
    type: LOGIN.LOADING,
  });

  axiosInstance()
    .post("/auth/login", {
      password,
      username,
    })
    .then((res) => {
      localStorage.token = res.data.token;
      dispatch({
        type: LOGIN.SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN.ERROR,
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    });
}