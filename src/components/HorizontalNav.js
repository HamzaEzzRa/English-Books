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
            this.props.logout();
            this.props.history.push('/login');
        });

    }

    render(){
        return(
        <div>
            <ul className="nav flex-column Nav">
                        <li>
                            <img src={logo} className="img-fluid" alt="Logo" />
                        </li>
                        <li className="nav-item">
                            {(localStorage.getItem('role') === 'freelancer') ? 
                            <a className="nav-link active" href="#"><Link to="/dashboard" ><FontAwesomeIcon icon={faSquare} /> Dashboard</Link></a>
                             : <a className="nav-link active" href="#"><Link to="/customer/dashboard" ><FontAwesomeIcon icon={faHome} /> Dashboard</Link></a>}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/annonces" > <FontAwesomeIcon icon={faHome} />Annonces</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/service-client" >Service Client</Link></a>
                        </li>
                        <li className="nav-item">
                        {(localStorage.getItem('role') === 'freelancer') ? 
                             <a className="nav-link" href="#"><Link to="/portfeuille" >Portfeuille</Link></a>
                             : <a className="nav-link active" href="#"><Link to="/customer/historique" >Historique</Link></a>}
                            
                        </li>
                        <li className="nav-item">
                        {(localStorage.getItem('role') === 'freelancer') ? 
                            <a className="nav-link" href="#"><Link to="/freelancer/profile" >Profile</Link></a>
                             : <a className="nav-link" href="#"><Link to="/customer/profile" >Profile</Link></a>}
                            
                        </li>
                        <div className="BottomNav">
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Hamid Aarif</a>
                            </li>
                            <li className="nav-item ">
                                <button onClick={this.handleLogout} className="btn btn-danger logoutButton">Logout</button>
                            </li>
                        </div>
                    </ul>
        </div>
    )
    }
    
}

export default withRouter(HorizontalNav)