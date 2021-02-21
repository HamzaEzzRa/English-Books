import "./dashboard.css"
import logo from "./images/logo.svg"
import './horizontalNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faHome } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from "react-router-dom"
import { React, Component } from "react"

class HorizontalNav extends Component{

    handleLogout = (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/Titsuite-1.0-SNAPSHOT/api/users/logout', requestOptions).then(res => res.json()).then((data) => {
            console.log(data);
            this.props.logout(); // This is the problem.
            this.props.history.push('/login'); // This one too
        });

    }

    render(){
        return(
        <div>
            <ul class="nav flex-column Nav">
                        <li>
                            <img src={logo} class="img-fluid" alt="Logo" />
                        </li>
                        <li class="nav-item">
                            {(localStorage.getItem('role') === 'freelancer') ? 
                            <a class="nav-link active" href="#"><Link to="/dashboard" ><FontAwesomeIcon icon={faSquare} /> Dashboard</Link></a>
                             : <a class="nav-link active" href="#"><Link to="/customer/dashboard" ><FontAwesomeIcon icon={faHome} /> Dashboard</Link></a>}
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link to="/annonces" > <FontAwesomeIcon icon={faHome} />Annonces</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Service Client</a>
                        </li>
                        <li class="nav-item">
                        {(localStorage.getItem('role') === 'freelancer') ? 
                             <a class="nav-link" href="#"><Link to="/portfeuille" >Portfeuille</Link></a>
                             : <a class="nav-link active" href="#"><Link to="/customer/historique" >Historique</Link></a>}
                            
                        </li>
                        <li class="nav-item">
                        {(localStorage.getItem('role') === 'freelancer') ? 
                            <a class="nav-link" href="#"><Link to="/freelancer/profile" >Profile</Link></a>
                             : <a class="nav-link" href="#"><Link to="/customer/profile" >Profile</Link></a>}
                            
                        </li>
                        <div class="BottomNav">
                            <li class="nav-item ">
                                <a class="nav-link" href="#">Hamid Aarif</a>
                            </li>
                            <li class="nav-item ">
                                <button onClick={this.handleLogout} className="btn btn-danger logoutButton">Logout</button>
                            </li>
                        </div>
                    </ul>
        </div>
    )
    }
    
}

export default withRouter(HorizontalNav)