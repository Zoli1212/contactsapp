import Reac, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import clearCreateContact from '../../context/contacts/clearCreateContact'
import createContact from '../../context/contacts/createContact'
import { useGlobalContext } from '../../context/Provider'
import CreateContact from '../../layout/Create'


const CreateContactComponent = () => {


  const [form, setForm ] = useState({})

  const navigate = useNavigate()

  const { contactsDispatch, contactsState: {addContact: { loading, error, data}} } = useGlobalContext()

  useEffect(() => {

    if(data) navigate('/')


    return () => {
      clearCreateContact()(contactsDispatch)
    }

  }, [data])


  console.log(form)


  const onSubmit = () => {

    createContact(form)(contactsDispatch)

  }
  const onChange = (e, { name, value} ) => {
    setForm({...form, [name]: value})
  }

  const formInvalid = !form.firstName?.length || !form.lastName?.length|| !form.countryCode?.length || !form.phoneNumber?.length
  return (
    <div>
   
      <CreateContact onChange={onChange} form={form} onSubmit={onSubmit} formInvalid={formInvalid} loading={loading}/>

    </div>
  )
}

export default CreateContactComponent