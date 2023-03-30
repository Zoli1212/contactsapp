
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import routes from './routes';
import 'semantic-ui-css/semantic.min.css'
import { GlobalProvider } from './context/Provider';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          { routes.map((item, index) => <Route key={index} path={item.path} element={<item.component/>} /> )}
        </Routes>
      </Router>
    
    </GlobalProvider>
  );
}

export default App;
