
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation, useSearchParams} from 'react-router-dom'
import routes from './routes';
import 'semantic-ui-css/semantic.min.css'
import { GlobalProvider } from './context/Provider';
import isAuthenticated from './utils/isAuthenticated';
import { useEffect, Suspense, useState } from 'react';
import UserLeaveConfirmation from './components/UserLeaveConfirmation';


const RenderRoute = ({ component: Component, path, needsAuth, title, ...rest}) => {

  document.title = title || 'E-sport'

  const navigate = useNavigate()
  const {pathname} = useLocation()
  const [previousPathname, setPreviousPathname] = useState('');
  const [formIsHalfFilledApp, setFormIsHalfFilledApp] = useState(false)
  
 
 

 

  useEffect(() => {

    if(needsAuth && !isAuthenticated()){
    
      navigate('/auth/login')
    }
  }, [])

  //   useEffect(() => {
  //   const beforeUnloadListener = e => {
  //     if (formIsHalfFilled) {
  //       e.preventDefault();
  //       e.returnValue = '';
  //     }
  //   };
  //   window.addEventListener('beforeunload', beforeUnloadListener);

  //   return () => {
  //     window.removeEventListener('beforeunload', beforeUnloadListener);
  //   };
  // }, [formIsHalfFilled]);

  useEffect(() => {
    const prevPathname = sessionStorage.getItem('previousPathname') || '';
    setPreviousPathname(prevPathname);
    sessionStorage.setItem('previousPathname', pathname);
    if(prevPathname === '/contacts/create' && formIsHalfFilledApp){
      const shouldLeavePage = handleLeavePage();
      if (!shouldLeavePage) {
        navigate(-1);
      }

    } 
  }, [pathname]);


    


  const handleLeavePage = () => {
    const confirmation = window.confirm(
      'You have unsaved changes. Are you sure you want to leave?'
    );
    if (confirmation) {
      return true
    }
    return false
  };




  // handleLeavePage()

  const props = title === 'CreateContact' ? { setFormIsHalfFilledApp} : {};

  

 return <Component {...props}/>

  
}

function App() {

  const [confirmOpen, setConfirmOpen] = useState(true) 

  
  return (
    <GlobalProvider>
      <Router getUserConfirmation={(message, callback) => {

        return UserLeaveConfirmation(message, callback, confirmOpen, setConfirmOpen)

      }}>
        <Suspense fallback={<p>Loading</p>}>
          
        <Routes>
          { routes.map((route, index) => (<Route key={index} path={route.path} element={<Suspense fallback={<h2>Loading..</h2>}><RenderRoute {...route} /></Suspense>} />) )}
        </Routes>
        </Suspense>
      </Router>
    
    </GlobalProvider>
  );
}

export default App;
