import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/pages/Home';
import Info from './components/pages/Info';
import Resources from './components/pages/Resources';



function App() {
  return  (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resources" component={Resources} />
        <Route path="/info" component={Info} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
