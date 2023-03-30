import { LOGOUT } from "../../constants/actiontypes"
import contactsInitialState from "../initialstate/contactsInitialState";

export const contacts = (state,{ payload, type}) => {
    switch(type){

        case 'LOGOUT_USER': {
            return {...state, contactsInitialState}
        }
        default:
            return state
    }
}

export default contacts