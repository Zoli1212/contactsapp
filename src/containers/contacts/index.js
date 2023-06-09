import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import deleteContact from '../../context/contacts/deleteContact'
import getContacts from '../../context/contacts/getContacts'
import starUnstar from '../../context/contacts/starUnstar'
import { useGlobalContext } from '../../context/Provider'
import ContactsListUI from '../../layout/Contacts/List'


export const ContactsComponent = () => {

  const { contactsDispatch, contactsState } = useGlobalContext()

  const navigate = useNavigate()

 

  const { contacts: {data}} = contactsState

  const handleDeleteContact = id => {
    deleteContact(id)(contactsDispatch)
  }


  const handleStarUnstarContact = (id, is_favorite) => {
   

    starUnstar(id, !is_favorite)(contactsDispatch)

  }

 useEffect(() => {

  if(data.length === 0){
    getContacts(navigate)(contactsDispatch)

  }


  getContacts(navigate)(contactsDispatch)

 }, [])
  return (
    <ContactsListUI state={contactsState} deleteContact={handleDeleteContact} starUnstarContact={handleStarUnstarContact}/>
  )
}
