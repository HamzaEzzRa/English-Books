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
                    <div className="card col-3">
                        <img className="card-img-top" src={cardTest} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{item.description}</h5>
                            <p className="card-text">{item.city} / {item.startDay} / {item.minimumWage}</p>
                        </div>
                    </div>
                )
            })
        }
        return (
            <div>
                <div className="row">
                    <div className="col-2">
                        <HorizontalNav logout={this.props.rest.logout}/>
                    </div>
                    <div className="col Content">
                        <div className="row">
                            <div className="col filterRow">
                                <span id="nbOfServices">{this.state.size} services available</span>
                                <span id="recent"> Recent</span>
                            </div>
                        </div>

                        <div className="row">
                            {offers()}   
                        </div>
                    </div>
                </div>
                
            </div>
            )
    };
    
}

export default  withRouter(MesAnnonces) ;