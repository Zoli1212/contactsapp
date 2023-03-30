import React, { useEffect } from 'react'
import { Link} from 'react-router-dom'
import RegisterUI from '../../layout/Register'
import useForm from './useForm'

export const RegisterComponent = () => {


  useEffect(() => {
  
  }, [])
  return (
    <RegisterUI form={useForm()} />
  )
}
