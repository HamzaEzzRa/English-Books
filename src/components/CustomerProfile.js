import { React, Component } from "react";
import { withRouter } from "react-router-dom";
import CustomerNavbar from "./CustomerNavbar";
import HorizontalNav from "./HorizontalNav";

class CustomerProfile extends Component{

    render(){
        return (
            <div class="row">
                
                <div class="col-2">
                    <HorizontalNav />
                </div>
                <div class="col Content">
                    <p>Hello World</p>
                </div>
            </div>
        )
    }
};

export default withRouter(CustomerProfile)