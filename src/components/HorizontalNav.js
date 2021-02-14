import "./dashboard.css"
import logo from "./images/logo.svg"
import './horizontalNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

function HorizontalNav(){
    return(
        <div>
            <ul class="nav flex-column Nav">
                        <li>
                            <img src={logo} class="img-fluid" alt="Logo" />
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#"><Link to="/dashboard" ><FontAwesomeIcon icon={faSquare} /> Dashboard</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link to="/annonces" >Annonces</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Service Client</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link to="/portfeuille" >Portfeuille</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Historique</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Paramètres</a>
                        </li>
                        <li class="nav-item BottomNav">
                            <a class="nav-link" href="#">Hamid Aarif</a>
                        </li>
                    </ul>
        </div>
    )
}

export  default HorizontalNav;