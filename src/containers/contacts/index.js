import React from 'react'
import { Header } from '../../components/Header'
import { useGlobalContext } from '../../context/Provider'

export const ContactsComponent = () => {

  const context = useGlobalContext()

  console.log(context)
  return (
    <div>
      <Header />
      <h1>Home</h1>
    </div>
  )
}
