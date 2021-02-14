import HorizontalNav from "./HorizontalNav";
import './portfeuille.css'

function Portfeuille() {
    const elements = ['one', 'two', 'three', 'for']
    const items = []

    for(const [index, value] of elements.entries()){
            items.push(
                <div class="serviceItem">
                    Saturday February 20th <br /> 
                    Repairing the kitchen’s roof <br />
                    14:00 
                </div>
            )
    }

    // const [toggleState, setToggleState] = useState(1);

    // const toggleTab = (index) => {
    //     setToggleState(index);
    // };

    return (
        <div>
            <div class="row">
                <div class="col-2">
                    <HorizontalNav />
                </div>
                <div class="col Content">
                    <div class="row">
                        <div class="col-6">
                            <div class="Header"><b>My Services</b></div>
                            <hr />
                            <div class="">
                                    {items}
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
        
    );}

export default  Portfeuille;