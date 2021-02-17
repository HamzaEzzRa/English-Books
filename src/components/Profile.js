import HorizontalNav from "./HorizontalNav";
import {React, Component} from 'react'
import { withRouter } from "react-router-dom";

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
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <button type="submit" className="customButton padded-left">Save</button>
                                        <h3 className="padded-up">Diploma</h3>
                                        <div className="col-sm-3">
                                            <label>Name</label>
                                        </div>
                                        <input name="name" value={diploma.name} onChange={(e) => {this.handleDiplomaName(e, diploma.id)}} required />
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <label>Acquisition Date</label>
                                        </div>
                                        <input name="date" type="date" value={this.formatDate(diploma.acquisitionDate)} onChange={(e) => {this.handleDiplomaDate(e, diploma.id)}} required />
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <label>Field</label>
                                        </div>
                                        <input name="field" value={diploma.field} onChange={(e) => {this.handleDiplomaField(e, diploma.id)}} required />
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </form>
                );
            })
        };

        return <div>
                <div class="col-2">
                    {/* <HorizontalNav /> */}
                </div>
                <div class="col Content">
                    <button onClick={this.handleLogout} className="customButton logoutButton">Logout</button>
                    <div className="main-body">
                        <div className="col-md-8">
                            <h2>Freelancer Profile</h2>
                            <form onSubmit={this.handleProfileUpdate}>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <button type="submit" className="customButton padded-left">Save</button>
                                            <h3 className="padded-up">Personal Details</h3>
                                            <div className="col-sm-3">
                                                <label>Email</label>
                                            </div>
                                            <input name="email" type="email" value={this.state.email} readOnly={true} required />
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label>First Name</label>
                                            </div>
                                            <input name="firstName" value={this.state.firstName} onChange={this.handleProfileChange} required />
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label>Last Name</label>
                                            </div>
                                            <input name="lastName" value={this.state.lastName} onChange={this.handleProfileChange} required />
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label>Phone Number</label>
                                            </div>
                                            <input name="phoneNumber" type="tel" value={this.state.phoneNumber} onChange={this.handleProfileChange} required />
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label>City</label>
                                            </div>
                                            <input name="city" value={this.state.city} onChange={this.handleProfileChange} required />
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label>Address</label>
                                            </div>
                                            <input name="address" value={this.state.address} onChange={this.handleProfileChange} required />
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label>Activity</label>
                                            </div>
                                            <input name="activity" value={this.state.activity} onChange={this.handleProfileChange} required />
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label>Minimum Wage</label>
                                            </div>
                                            <input name="minimumWage" value={this.state.minimumWage} onChange={this.handleProfileChange} required />
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label>Birth Date</label>
                                            </div>
                                            <input name="birthDate" type="date" value={this.state.birthDate} onChange={this.handleProfileChange} required />
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </form>
                        </div>
                        {diplomaList()}
                    </div>
                </div>
        </div>
    }
}

export default withRouter(Profile);