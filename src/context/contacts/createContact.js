import { ADD } from "../../constants/actiontypes"
import { API } from "../../constants/api"
import axiosInstance from "../../helpers/axiosInstance"

export default ({ firstName: first_name, lastName: last_name, phoneNumber: phone_number, countryCode: country_code}) => (dispatch) => {

    dispatch({
        type: ADD.LOADING
    })

    axiosInstance().post('/contacts/', {first_name,last_name, phone_number,country_code  }).then((res) => { 
        dispatch({ type: ADD.SUCCESS,
        payload: res.data})
        console.log('data', res.data) } ).catch((err) => {
            dispatch({

                type: ADD.ERROR,
                payload: err.response ? err.response.data : API.CONNECTION_ERROR
            })
        })


}