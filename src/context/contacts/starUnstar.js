import { STAR } from "../../constants/actiontypes"
import axiosInstance from "../../helpers/axiosInstance"
import { API } from '../../constants/api'

export default (id, is_favorite) => (dispatch) => {


    dispatch({
        type: STAR.ADD_REMOVE_STAR_LOADING,
        payload: id
    })

    axiosInstance().patch(`/contacts/${id}`, { is_favorite})
    .then((res) => {
        dispatch({
            type: STAR.ADD_REMOVE_STAR_SUCCESS,
            payload: res.data
        })

    }).catch((err) => {

        dispatch({

            type:STAR.ADD_REMOVE_STAR_ERROR,
            payload: err.response ? err.response.data : API.CONNECTION_ERROR
        })

    })
}