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
import Profile from './components/Profile';
import { React, Component } from 'react';
import UnauthGuard from './components/UnauthGuard';
import AuthGuard from './components/AuthGuard';
import CustomerProfile from './components/CustomerProfile'
import CustomerDashboard from './components/CustomerDashboard';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
    const auth = localStorage.getItem("isAuthenticated");
    if (auth != null)
      this.state.isAuthenticated = (auth === 'true');
    else
      localStorage.setItem("isAuthenticated", this.state.isAuthenticated);
  }

  authenticate = () => {
    this.setState({
      isAuthenticated: true
    });
    localStorage.setItem("isAuthenticated", this.state.isAuthenticated);
  }

  logout = () => {
    this.setState({
      isAuthenticated: false
    });
    localStorage.setItem("isAuthenticated", this.state.isAuthenticated);
  }

  render(){
    return (
    <div className="App">
      

      <Router>
        <switch>
          <Route path="/" exact component={LandingPage2}/>
          {/* <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} /> */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/customer/dashboard" component={CustomerDashboard} />
          <Route path="/portfeuille" component={Portfeuille} />
          {/* <Route path="/customer/historique" component={Portfeuille} /> */}
          {/* <Route path="/annonces" component={MesAnnonces}/>
          <Route path="/freelancer/profile" component={Profile} /> */}

          <UnauthGuard path="/signup" auth={this.state.isAuthenticated} component={SignUp} />
          <UnauthGuard path="/login" auth={this.state.isAuthenticated} rest={{authenticate: this.authenticate}} component={Login} />
          <AuthGuard path="/freelancer/profile" auth={this.state.isAuthenticated} rest={{logout: this.logout}} component={Profile} />
          <AuthGuard path="/customer/profile" auth={this.state.isAuthenticated} rest={{logout: this.logout}} component={CustomerProfile} />
          
          <AuthGuard path="/annonces" auth={this.state.isAuthenticated} rest={{logout: this.logout}} component={MesAnnonces} />
        </switch>
      </Router>
    </div>
  );
  }
  
}

