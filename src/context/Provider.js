import React, { createContext, useContext, useReducer } from 'react'
import authInitialState from './initialstate/authInitialState'
import contactsInitialState from './initialstate/contactsInitialState'
import auth from './reducers/auth'
import contacts from './reducers/contacts'


export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [authState, authDispatch] = useReducer(auth, authInitialState)
    const [contactsState, contactsDispatch] = useReducer(contacts, contactsInitialState)
    return <GlobalContext.Provider value={{ authState, authDispatch, contactsState, contactsDispatch }}>
        {children}

    </GlobalContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}