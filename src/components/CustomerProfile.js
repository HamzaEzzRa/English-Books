import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';
import HorizontalNav from './HorizontalNav';


class CustomerProfile extends Component {
    state = {
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        birthDate: '',
        city: '',
        address: '',
        subscription: '',
        in_edit: false
    }

    handleProfileChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
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

    handleChange = (event) => {
        console.log(event);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    handleLogout = (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/Titsuite-1.0-SNAPSHOT/api/users/logout', requestOptions).then(res => res.json()).then((data) => {
            console.log(data);
            this.props.history.push('/login');
        });
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/Titsuite-1.0-SNAPSHOT/api/users/profile', requestOptions).then(res => res.json()).then((data) => {
            console.log(data);
            if (data != null) {
                console.log(data);
                this.setState(
                    {
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        phoneNumber: data.phoneNumber,
                        birthDate: data.birthDate,
                        city: data.city,
                        address: data.address,
                        subscription: data.subscription
                    }
                );
            }
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

    render() {
        return (
            <div className="container">

                <div class="row">
                    <div class="col-2">
                        <HorizontalNav logout={this.props.rest.logout}/>
                    </div>
                    <div class="col">

                    
                <div class="row ">
                        <div class="col ProfileHeader">
                            <h2 class="freelancerProfile">Customer Profile</h2>
                            <div class="floatRight">
                                <button onClick={this.handleLogout} className="btn btn-danger logoutButton">Logout</button>
                            </div>
                        </div>
                    </div>

                <div className="main-body">
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                            <form onSubmit={this.handleProfileUpdate}>
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
                                                <input name="birthDate" type="date" value={this.formatDate(this.state.birthDate)} onChange={this.handleProfileChange} class="form-control" required />
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
                                                <label>Subscription</label>
                                                <input name="subscription" value={this.state.subscription} onChange={this.handleProfileChange} class="form-control" required />
                                            </div>
                                        </div>
                                      
                                    </div>
                                    </form>  
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CustomerProfile);