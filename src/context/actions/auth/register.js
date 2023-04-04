import { REGISTER } from "../../../constants/actiontypes";
import axiosInstance from "../../../helpers/axiosInstance";


export const register = ({email, password, username, lastName: last_name, firstName: first_name}) =>(dispatch) => {

    dispatch({

        type: REGISTER.LOADING,

    })
    

    axiosInstance().post('/auth/register', { email, password, username, last_name, first_name})
    .then((res) => {

        dispatch({

            type: REGISTER.SUCCESS,
            payload: res.data
        })

    })
    .catch((error) => {
        dispatch({
            type: REGISTER.ERROR,
            payload: error.response.data
        })
    })
}