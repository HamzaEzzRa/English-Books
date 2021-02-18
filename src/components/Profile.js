import HorizontalNav from "./HorizontalNav";
import {React, Component} from 'react'
import { withRouter } from "react-router-dom";
import './profile.css'
import profilePng from './images/profile.png'

class Profile extends Component{
    state = {
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        birthDate: '',
        city: '',
        address: '',
        activity: '',
        minimumWage: '',
        diplomas: [],
    }

    handleProfileUpdate = (event) => {
        event.preventDefault();

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            birthDate: this.state.birthDate,
            city: this.state.city,
            address: this.state.address,
            activity: this.state.activity,
            minimumWage: this.state.minimumWage
        };

        console.log(user);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        fetch('/Titsuite-1.0-SNAPSHOT/api/users/profile/update', requestOptions)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
            }
        );
    }

    handleDiplomaUpdate = (event, index) => {
        event.preventDefault();

        const diplomas = [...this.state.diplomas];
        let diploma = null;
        for (let i = 0; i < diplomas.length; i++) {
            if (diplomas[i].id === index) {
                diploma = diplomas[i];
                break;
            }
        }

        console.log(diploma);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(diploma)
        };
        fetch('/Titsuite-1.0-SNAPSHOT/api/diplomas/update', requestOptions)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
            }
        );
    }

    handleProfileChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    handleDiplomaName = (event, index) => {
        let moddedDiplomas = [...this.state.diplomas];
        for (let i = 0; i < moddedDiplomas.length; i++) {
            if (moddedDiplomas[i].id === index) {
                moddedDiplomas[i].name = event.target.value;
                break;
            }
        }
        this.setState(
            {
                diplomas: moddedDiplomas
            }
        );
    }

    handleDiplomaDate = (event, index) => {
        let moddedDiplomas = [...this.state.diplomas];
        for (let i = 0; i < moddedDiplomas.length; i++) {
            if (moddedDiplomas[i].id === index) {
                moddedDiplomas[i].acquisitionDate = event.target.value;
                break;
            }
        }
        this.setState(
            {
                diplomas: moddedDiplomas
            }
        );
    }

    handleDiplomaField = (event, index) => {
        let moddedDiplomas = [...this.state.diplomas];
        for (let i = 0; i < moddedDiplomas.length; i++) {
            if (moddedDiplomas[i].id === index) {
                moddedDiplomas[i].field = event.target.value;
                break;
            }
        }
        this.setState(
            {
                diplomas: moddedDiplomas
            }
        );
    }

    handleLogout = (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/Titsuite-1.0-SNAPSHOT/api/users/logout', requestOptions).then(res => res.json()).then((data) => {
            console.log(data);
            this.props.rest.logout();
            this.props.history.push('/login');
        });
    }

    formatDate = (date) => {
        let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/Titsuite-1.0-SNAPSHOT/api/users/profile', requestOptions).then(res => res.json()).then((data) => {
            console.log(data);
            if (data != null) {
                this.setState(
                    {
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        phoneNumber: data.phoneNumber,
                        birthDate: this.formatDate(data.birthDate),
                        city: data.city,
                        address: data.address,
                        activity: data.activity,
                        minimumWage: data.minimumWage,
                        diplomas: JSON.parse(data.diplomas)
                    }
                );
            }
        });
    }


    render(){
        const diplomaList = () => {
            return this.state.diplomas.map((diploma) => {
                return (
                    <form onSubmit={(e) => {this.handleDiplomaUpdate(e, diploma.id)}} key={diploma.id}>
                        <div className="">
                            <div className=" ">
                                <div className="">
                                    <div className="row">
                                        <div class="col">
                                            <h3 className="freelancerProfile">Diploma</h3>
                                            <button type="submit" className="btn btn-primary floatRight">Save</button>
                                        </div>
                                    </div>    
                                    <hr />   
                                    <div className="row"> 
                                        <div className="col">
                                            <label>Name</label>
                                            <input name="name" value={diploma.name} onChange={(e) => {this.handleDiplomaName(e, diploma.id)}} class="form-control" required />
                                        </div>
                                    </div>    
                                    <hr />
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Acquisition Date</label>
                                            <input name="date" type="date" value={this.formatDate(diploma.acquisitionDate)} onChange={(e) => {this.handleDiplomaDate(e, diploma.id)}} class="form-control" required />
                                        </div>
                                        <div className="col-6">
                                            <label>Field</label>
                                            <input name="field" value={diploma.field} onChange={(e) => {this.handleDiplomaField(e, diploma.id)}} class="form-control" required />
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </form>
                );
            })
        };

        return <div class="row">
                <div class="col-2">
                    <HorizontalNav />
                </div>
                <div class="col Content ">
                    <div class="row ">
                        <div class="col ProfileHeader">
                            <h2 class="freelancerProfile">Freelancer Profile</h2>
                            <div class="floatRight">
                                <button onClick={this.handleLogout} className="btn btn-danger logoutButton">Logout</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-4 profileIllustration">
                            <img src={profilePng} class="img-fluid" alt="Profile" />
                        </div>
                        <div className="col-7 Content PersonalDetails">
                            
                            <form onSubmit={this.handleProfileUpdate}>
                                <div >
                                    <div >
                                        <div className="row">
                                            <div class="col">
                                                <button type="submit" className="btn btn-danger floatRight">Save</button>
                                                <h3 className="freelancerProfile"> Personal Details <br/> {this.state.email} </h3>
                                                <p></p>
                                            </div>
                                        </div>
                                        {/* <div class="row">
                                            <div className="col">
                                                <label>Email : </label>
                                                {/* <input name="email" type="email" value= readOnly={true} required /> */}
                                            {/* </div>
                                        <hr />
                                        </div> */} 
                                        
                                        <div class="row">
                                            <div className="col-6">
                                                <label>First Name  </label>
                                                <input name="firstName" value={this.state.firstName} onChange={this.handleProfileChange} class="form-control" required />
                                            </div>
                                            <div className="col-6">
                                                <label>Last Name</label>
                                                <input name="lastName" value={this.state.lastName} onChange={this.handleProfileChange} class="form-control" required />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col">
                                                <label>Birth Date</label>
                                                <input name="birthDate" type="date" value={this.state.birthDate} onChange={this.handleProfileChange} class="form-control" required />
                                            </div>
                                        </div>

                                        <hr />
                                        <div className="row">
                                            <div className="col-6">
                                                <label>Address</label>
                                                <input name="address" value={this.state.address} onChange={this.handleProfileChange} class="form-control" required />
                                            </div>
                                            <div className="col-6">
                                                <label>City</label>
                                                <input name="city" value={this.state.city} onChange={this.handleProfileChange} class="form-control" required />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col">
                                                <label>Phone Number</label>
                                                <input name="phoneNumber" type="tel" value={this.state.phoneNumber} onChange={this.handleProfileChange} class="form-control" required />
                                            </div>
                                            
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-6">
                                                <label>Activity</label>
                                                <input name="activity" value={this.state.activity} onChange={this.handleProfileChange} class="form-control" required />
                                            </div>
                                            <div className="col-6">
                                                <label>Minimum Wage</label>
                                                <input name="minimumWage" value={this.state.minimumWage} onChange={this.handleProfileChange} class="form-control" required />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                    <div class="row">
                        <div class="col-2"></div>
                        <div className="col-8 Content PersonalDetails">
                            {diplomaList()}
                        </div>
                    </div>
                    
                </div>
        </div>
    }
}

export default withRouter(Profile);