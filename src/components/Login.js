import './Login.css'
import logo from './images/logo.svg'
import pict from './images/login_pict.svg'
import {React, Component} from 'react'
import { Link, Redirect, withRouter} from 'react-router-dom';
import LandingPage from './LandingPage';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            role: ''
        };
    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    handleSubmit = event => {
        event.preventDefault();
    
        const user = {
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        };

        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        fetch('/Titsuite-1.0-SNAPSHOT/api/users/login', requestOptions)
            .then(res => res.json())
            .then((data) => {
                this.props.rest.authenticate();
                this.props.history.push('/' + this.state.role + '/profile');
            });
    }

    render(){
        return (
        <div class="Login">
           <div class="container">
                <div class="row">
                    <div class="col FormDiv">
                        <img src={logo} class="img-fluid" alt="Logo" />

                        <div class="LoginContent">
                            <p> <span>Login to
                                <br/>Access your Account</span></p>
                        </div>
                        <div class="LoginForm">
                            <form onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.handleChange} required/>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={this.handleChange} required/>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="role" id="exampleRadios1" value="customer" onChange={this.handleChange} checked={this.state.role === "customer"} />
                                    <label class="form-check-label" for="exampleRadios1">
                                        I'm a Client
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="role" id="exampleRadios2" value="freelancer" onChange={this.handleChange} checked={this.state.role === "freelancer"}/>
                                    <label class="form-check-label" for="exampleRadios2">
                                        I'm a FreeLancer
                                    </label>
                                </div>
                                    
                                
                                <div class="row">
                                    <div class="col"><button type="submit" class="btn btn-primary" id="submitButton">Submit</button></div>
                                    <div class="col">
                                        <div><span><a href="" class="stretched-link">Forget your Password?</a></span></div>
                                        <div><span><a href="" class="stretched-link">Don’t have an Account?</a></span></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                    <div class="col illustration">
                        <center>
                            <h3>Tous nos services au bout du doigt</h3>
                            <p>Laissez-nous gérer ce qui vous prend du temps et concentrez-vous sur l’essentiel !</p>
                        </center>
                        

                        <img src={pict} class="img-fluid" alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
        
    )
    }
;}

export default  withRouter(Login);