import { useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../../context/actions/auth/register'
import { GlobalContext } from '../../context/Provider'

export default () => {


    const [form, setForm] = useState({})
    const [fieldErrors, setFieldErrors] = useState({})

    const { authDispatch, authState: { auth: {loading, error, data } } } = useContext(GlobalContext)
    const navigate = useNavigate();
    
    useEffect(()=> {
        if(error){

            for( const item in error){
                setFieldErrors({ ...fieldErrors, [item]: error[item][0]})
            }

        }

    }, [error])

    useEffect(() => {

        if(data){
            navigate('/auth/login')

        }

    }, [data])
    console.log('data', data)
    console.log('error', error)


    const registerFormValid = !form.username?.length || !form.firstName?.length || !form.lastName?.length || !form.email?.length || !form.password?.length


    const onChange = (e, {name, value}) => {

        setForm({...form, [name]:value})

    }


    const onSubmit = () => {

        setFieldErrors({})
        console.log(form)

        register(form)(authDispatch)

    }
    return {form, onChange, loading, fieldErrors, registerFormValid, onSubmit}
}