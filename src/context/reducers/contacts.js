
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
        case 'ADD_CONTACT_LOAD': {
            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    loading: true
                }

            }
        }

        case 'ADD_CONTACT_ERROR': {

            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    loading: false
                }
            }

        }

        case 'ADD_CONTACT_SUCCESS': {

            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    loading: false,
                    data: payload,

                },
                contacts: {
                    ...state.contacts,
                    loading: false,
                    data: [payload, ...state.contacts.data]
                }
            }

        }

        case 'CLEAR_ADD_CONTACT': {

            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    error: null,
                    loading: false,
                    data: null
                }
            }

        }

       
        default:
            return state
    }
}

export default contacts