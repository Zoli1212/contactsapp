import { useContext, useEffect, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { login } from '../../context/actions/auth/login'
import { GlobalContext } from '../../context/Provider'

export default () => {


    const [form, setForm] = useState({})
    const [fieldErrors, setFieldErrors] = useState({})

    const { authDispatch, authState: { auth: {loading, error, data } } } = useContext(GlobalContext)
    const navigate = useNavigate();



    const loginFormValid = !form.username?.length || !form.password?.length;

    useEffect(()=> {
      if(error){

          for( const item in error){
              setFieldErrors({ ...fieldErrors, [item]: error[item][0]})
          }

      }

  }, [error])


    const onChange = (e, {name, value}) => {

        setForm({...form, [name]:value})

    }


    const onSubmit = () => {
        // register(form)(authDispatch);
       
    
        login(form)(authDispatch);
      };

      useEffect(() => {
        if (data) {
          if (data.user) {
            console.log('here', data.user)
            navigate('/')
          }
        }
      }, [data]);

      return { form, onChange, error, loading, loginFormValid, onSubmit };
}