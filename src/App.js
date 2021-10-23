import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages';



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Home/>
    </Router>
  );
}

export default App;
