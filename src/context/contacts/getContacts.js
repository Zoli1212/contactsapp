import { CONTACTS } from "../../constants/actiontypes"
import { API } from "../../constants/api"
import axiosInstance from "../../helpers/axiosInstance"

export default (navigate) => (dispatch) => {

    dispatch({
        type: CONTACTS.LOADING
    })
    axiosInstance(navigate).get('/contacts/').then((res) => { 
        console.log(res.data)

        dispatch({
            type: CONTACTS.SUCCESS,
            payload: res.data
        })

    }).catch((error) => {
        dispatch({
            type: CONTACTS.LOAD_ERROR,
            payload: error.response? error.response.data : API.CONNECTION_ERROR
        })
    })
}