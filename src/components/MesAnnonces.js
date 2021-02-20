import { React, Component } from "react";
import { withRouter } from "react-router-dom";
import HorizontalNav from "./HorizontalNav";
import cardTest from './images/cardTest.svg'
import "./mesAnnonces.css"

class MesAnnonces extends Component {

    state = {
        items : [],
        size : 0
    }
    
    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/Titsuite-1.0-SNAPSHOT/api/offers', requestOptions)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            this.setState(
                {
                    items : data,
                    size : data.length
                }
            )
        });
    }

    render(){
        const offers = ()=>{
            return this.state.items.map((item) => {
                return (
                    <div class="card col-3">
                        <img class="card-img-top" src={cardTest} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{item.description}</h5>
                            <p class="card-text">{item.city} / {item.startDay} / {item.minimumWage}</p>
                        </div>
                    </div>
                )
            })
        }
        return (
            <div>
                <div class="row">
                    <div class="col-2">
                        <HorizontalNav />
                    </div>
                    <div class="col Content">
                        <div class="row">
                            <div class="col filterRow">
                                <span id="nbOfServices">{this.state.size} services available</span>
                                <span id="recent"> Recent</span>
                            </div>
                        </div>

                        <div class="row">
                            {offers()}   
                        </div>
                    </div>
                </div>
                
            </div>
            )
    };
    
}

export default  withRouter(MesAnnonces) ;