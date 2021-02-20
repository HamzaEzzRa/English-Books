import { React, Component } from "react";
import { withRouter } from "react-router-dom";
import CustomerNavbar from "./CustomerNavbar";
import HorizontalNav from "./HorizontalNav";
import './customerDashboard.css'

class CustomerDashboard extends Component{

    state = {
        items : [],
        description : "",
        city : "",
        activity : "",
        minimumWage : "",
        startDay : ""
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/Titsuite-1.0-SNAPSHOT/api/offers/available', requestOptions).then(res => res.json()).then((data) => {
            console.log(data);
            this.setState(
                {items : data}
            )
        });
    }

    handleOffer = (event) => {
        event.preventDefault();

        const offer = {
            description: this.state.description,
            city: this.state.city,
            activity: this.state.activity,
            minimumWage: this.state.minimumWage,
            startDay : this.state.startDay
        };

        console.log(offer);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(offer)
        };
        fetch('/Titsuite-1.0-SNAPSHOT/api/offers', requestOptions)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
            }
        );
    }

    render(){
        return <div class="row">
            <div class="col-2">
                    <HorizontalNav />
                </div>
            <div class="col Content">
                <div class="row">
                    <div class="col">
                        <h5 class="floatLeft">Add new Offer</h5>
                        <button type="button" class="btn btn-primary floatRight">Add</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <label for="exampleFormControlTextarea1">City</label>
                                <input class="form-control" type="text" placeholder="Default input"/>
                            </div>
                            <div class="col-6">
                                <label for="exampleFormControlTextarea1">Start Day</label>
                                <input class="form-control" type="date" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Activity</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Plomberie</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="exampleFormControlTextarea1">Min Wage</label>
                                <input class="form-control" type="number" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                <div class="table">
                        <div class="titleDashboard">My Offers</div>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">ID </th>
                                <th scope="col">Description</th>
                                <th scope="col">Activity</th>
                                <th scope="col">City</th>
                                <th scope="col">Minimum Wage</th>
                                <th scope="col">Start Day</th>
                                <th scope="col">Payer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    }
};

export default  withRouter(CustomerDashboard) 