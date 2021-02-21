import { render } from "@testing-library/react";
import { React, Component } from "react";
import { withRouter } from "react-router-dom";
import HorizontalNav from "./HorizontalNav";
import './portfeuille.css'

export default class Portfeuille extends Component {
    state ={
        items : []
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/Titsuite-1.0-SNAPSHOT/api/myjobs/all', requestOptions).then(res => res.json()).then((data) => {
            console.log(data);
            this.setState(
                {items : data}
            )
        });
    }
    
    render(){

        const offers = ()=>{
            return this.state.items.map((item) => {
                return (<div class="serviceItem">
                    {item.id} -- 
                    {item.description} -- 
                    {item.activity} -- 
                    {item.city} -- 
                    {item.minimumWage} --
                    {item.startDay} --
                    
                </div>
                )
            })
        }
        return (
        <div>
            <div class="row">
                <div class="col-2">
                    <HorizontalNav logout={this.props.rest.logout}/>
                </div>
                <div class="col Content">
                    <div class="row">
                        <div class="col-6">
                            <div class="Header"><b>My Services</b></div>
                            <hr />
                            <div >
                                    {offers()}
                            </div>
                        </div>
                        <div class="col">
                            <div class="Header">
                                <b>Saturday, February 20th</b>
                                <hr />
                            </div>

                            <div class="row">
                                <div class="col">
                                    <div class="leftFloat"><b>Soufiane Hajazi</b></div>
                                    <div class="rightFloat"><button type="button" class="btn ">Edit</button></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
            
        </div>
        
    )
    }
    ;}

// export default  Portfeuille ;