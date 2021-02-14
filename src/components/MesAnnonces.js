import HorizontalNav from "./HorizontalNav";
import cardTest from './images/cardTest.svg'
import "./mesAnnonces.css"

function MesAnnonces() {
    const elements = ['one', 'two', 'three', 'for', 'five', 'six', 'seven'];
    const items = []

    for (const [index, value] of elements.entries()) {
        items.push(<div class="col-3">
                        <div class="card" style={{width : "14em;"}}>
                            <img src={cardTest} class="img-fluid" alt="Logo" />
                            <div class="card-body">
                                <h5 class="card-title">Job Title</h5>
                                <span>City <br /></span>
                                <span id="date">For 12/4/2021</span> <span id="price">400 DH</span>
                            </div>
                        </div>
                    </div>
                )
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
                            <span id="nbOfServices">382 services available</span>
                            <span id="recent"> Recent</span>
                        </div>
                    </div>

                    <div class="row">
                        {items}   
                    </div>
                </div>
            </div>
            
        </div>

        
    );}

export default  MesAnnonces;