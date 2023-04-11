import { DELETE } from "../../constants/actiontypes"
import axiosInstance from "../../helpers/axiosInstance"

export default (id) => (dispatch) => {
    dispatch({

        type: DELETE.DELETE_CONTACT_LOADING

    })


    axiosInstance()
    .delete(`/contacts/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE.DELETE_CONTACT_SUCCESS,
        payload: id,
      });
    })
    .catch((err) => {
      console.log("res.status", err.status);
      dispatch({
        type: DELETE.DELETE_CONTACT_ERROR,
        payload: err.response ? err.response.data : "could not connect",
      });
    });
};