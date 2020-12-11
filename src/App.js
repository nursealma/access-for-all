
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/pages/Home';
import Info from './components/pages/Info';
import Resources from './components/pages/Resources';


function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
        <Route  path="/" exact component={Home} />
        <Route  path="/info" exact component={Info} />
        <Route  path="/resources" exact component={Resources} />
        </Switch>
    </Router>
  );
}

export default App;
