import "./dashboard.css"
import logo from "./images/logo.svg"
import './horizontalNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

function CustomerNavbar(){
    return(
        <div>
            <ul class="nav flex-column Nav">
                        <li>
                            <img src={logo} class="img-fluid" alt="Logo" />
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#"><Link to="/customer/dashboard" ><FontAwesomeIcon icon={faHome} /> Dashboard</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link to="/annonces" > <FontAwesomeIcon icon={faHome} />Annonces</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Service Client</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link to="#" >Historique</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link to="/customer/profile" >Profile</Link></a>
                        </li>
                        <li class="nav-item BottomNav">
                            <a class="nav-link" href="#">Hamid Aarif</a>
                        </li>
                    </ul>
        </div>
    )
}

export  default CustomerNavbar;