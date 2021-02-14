import './navBar.css'
import logo from './images/logo.svg'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm navbar-light navbar-css">
            <a class="navbar-brand" href="#"><img src={logo} class="img-fluid" alt="TistSuite" /></a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
              <div class="collapse navbar-collapse" id="collapsibleNavId">
                  <ul class="navbar-nav  ml-auto mt-2 mt-lg-0">  
                    <li class="nav-item ">
                        <a class="nav-link" href="#"> Careers <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Services </a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="#">About us <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="#">Team <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="#"> <Link to="/login">Login</Link> <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#"><Link to="/signup">Sign up </Link><span class="sr-only">(current)</span></a>
                    </li>
                  </ul>
            </div>
        </nav>
      </div>
    );
  }
  
export default NavBar;