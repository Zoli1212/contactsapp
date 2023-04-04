import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import getContacts from '../../context/contacts/getContacts'
import { useGlobalContext } from '../../context/Provider'
import ContactsListUI from '../../layout/Contacts/List'


export const ContactsComponent = () => {

  const { contactsDispatch, contactsState } = useGlobalContext()

  const navigate = useNavigate()

  console.log(contactsState)

 useEffect(() => {


  getContacts(navigate)(contactsDispatch)

 }, [])
  return (
    <ContactsListUI state={contactsState} />
  )
}
