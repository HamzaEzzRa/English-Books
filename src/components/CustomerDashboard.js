import { React, Component } from "react";
import { withRouter } from "react-router-dom";
import CustomerNavbar from "./CustomerNavbar";
import HorizontalNav from "./HorizontalNav";
import './customerDashboard.css'
import Select from "react-select"

class CustomerDashboard extends Component{

    state = {
        items : [],
        description : "",
        city : "",
        activity : "",
        minimumWage : "",
        startDay : "",
        options : [
        { value: 'Plomberie', label: 'Plomberie' }
      ]
    }

    

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/Titsuite-1.0-SNAPSHOT/api/offers/myoffers', requestOptions).then(res => res.json()).then((data) => {
            console.log(data);
            this.setState(
                {items : data}
            )
        });
    }

    handleOffer = () => {

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
        fetch('/Titsuite-1.0-SNAPSHOT/api/offers/new', requestOptions)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
            }
        );
    }

    handleOfferChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    render(){
        const offers = ()=>{
            return this.state.items.map((item) => {
                return (<tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.description}</td>
                    <td>{item.activity}</td>
                    <td>{item.city}</td>
                    <td>{item.minimumWage}</td>
                    <td>{item.startDay}</td>
                    <td>{item.status}</td> 
                </tr>
                )
            })
        }
        return <div class="row">
            <div class="col-2">
                    <HorizontalNav logout={this.props.rest.logout}/>
                </div>
            <div class="col Content">
            
                
                <div class="row">
                    <div class="col">
                        <h5 class="floatLeft">Add new Offer</h5>
                        <button type="button" class="btn btn-primary floatRight" onClick={()=>this.handleOffer()}>Add</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" name="description" onChange={this.handleOfferChange}></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <label for="exampleFormControlTextarea1">City</label>
                                <input class="form-control" type="text" placeholder="Default input" name="city" onChange={this.handleOfferChange}/>
                            </div>
                            <div class="col-6">
                                <label for="exampleFormControlTextarea1">Start Day</label>
                                <input class="form-control" type="date" onChange={this.handleOfferChange} name="startDay"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Activity</label>
                                    <select class="form-control" id="activity" onChange={this.handleOfferChange} name="activity" value={this.state.activity}>
                                    <option></option>
                                    <option value="Plomberie" >Plomberie</option>
                                    <option value="DEveloper" >Developer</option>
                                    </select>
                                    
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="exampleFormControlTextarea1">Min Wage</label>
                                <input class="form-control" type="number" onChange={this.handleOfferChange} name="minimumWage"/>
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
                                {offers()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    }
};

export default  withRouter(CustomerDashboard) 