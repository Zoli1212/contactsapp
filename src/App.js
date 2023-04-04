
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation} from 'react-router-dom'
import routes from './routes';
import 'semantic-ui-css/semantic.min.css'
import { GlobalProvider } from './context/Provider';
import isAuthenticated from './utils/isAuthenticated';
import { useEffect } from 'react';


const RenderRoute = ({ component: Component, path, needsAuth, title, ...rest}) => {

  document.title = title || 'E-sport'

  const navigate = useNavigate()
  console.log(isAuthenticated())
 

  useEffect(() => {

    if(needsAuth && !isAuthenticated()){
    
      navigate('/auth/login')
    }
  }, [])





 return <Component />

  
}

function App() {

  
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          { routes.map((route, index) => (<Route key={index} path={route.path} element={<RenderRoute {...route} />} />) )}
        </Routes>
      </Router>
    
    </GlobalProvider>
  );
}

export default App;
