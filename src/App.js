import LandingPage from './components/Landing';
import navBar from './components/NavBar';

import LandingPage2 from './components/LandingPage'
import Login from './components/Login'
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"
import Landing from './components/Landing';
import Portfeuille from './components/Portfeuille';
import MesAnnonces from './components/MesAnnonces';

function App() {
  return (
    <div className="App">
      

      <Router>
        <switch>
          <Route path="/" exact component={LandingPage2}/>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/portfeuille" component={Portfeuille} />
          <Route path="/annonces" component={MesAnnonces}/>
        </switch>
      </Router>
    </div>
  );
}

export default App;
