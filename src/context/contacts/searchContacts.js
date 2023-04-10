import { SEARCH } from "../../constants/actiontypes"

export default (searchText) => (dispatch) => {

    dispatch({
        type: SEARCH.SEARCH_CONTACTS,
        payload: searchText
    })

}