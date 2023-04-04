
import contactsInitialState from "../initialstate/contactsInitialState";

export const contacts = (state,{ payload, type}) => {
    
    switch(type){

        case 'CONTACTS_LOADING':
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: true

                }
            }
        case 'CONTACTS_LOAD_SUCCESS':
            console.log('here')
            
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: false,
                    data: payload

                }
            }
        case 'CONTACTS_LOAD_ERROR':
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: false,
                    error: payload

                }
            }
        case 'LOGOUT_USER': {
                
                return {...state, ...contactsInitialState}
            }

       
        default:
            return state
    }
}

export default contacts