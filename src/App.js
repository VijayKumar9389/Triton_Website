import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <h1>Test</h1>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
