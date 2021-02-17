import logo from './images/logo.svg';
import './dashboard.css';
import MesAnnonces from './MesAnnonces';
import Portfeuille from './Portfeuille';
import HorizontalNav from './HorizontalNav';
import { Line } from 'react-chartjs-2';
import {React, Component} from 'react';

class Dashboard extends Component {

    elements = [1, 2, 3, 4, 5, 6];
    items = [];

    renderItems = ()=> {
        for( let [index, value] of this.elements.entries()){
        this.items.push(
            <tr>
                <th scope="row">Test</th>
                <td>test@gmail.com</td>
                <td>14h30</td>
                <td>+2126 45 65 76 89</td>
                <td>Agdal, Rabat</td>
                <td> <button type="button" class="btn btn-primary">Accept</button> 
                <button type="button" class="btn btn-danger">Refuser</button>
                </td>  
            </tr>
        )}
    }
    componentDidMount() {
        
    }

    render(){
        return (
        <div>
            <div class="row">
                <div class="col-2">
                    <HorizontalNav />
                </div>
                <div class="col Content">
                    <div class="overview">  Overview </div>
                    <div class="dashboardHeaer">
                        <div class="titleDashboard">Revenus journaliers</div>
                    </div>
                    <div class="chart"><Line 
                        data={{
                        labels: ['Jan', 'Fev', 'Mars', 'Avr', 'May', 'Juin', 'Juillet', 'Aug', 'Oct', 'Sept', 'Nov', 'Dec'],
                        datasets: [
                            {
                            label: 'Gain Mensuel',
                            data: [12, 19, 8, 5, 10, 15, 12, 19, 3, 60, 7, 5],
                            // backgroundColor: [
                            //     'red',
                            //     'rgba(54, 162, 235, 0.2)',
                            //     'rgba(255, 206, 86, 0.2)',
                            //     'rgba(75, 192, 192, 0.2)',
                            //     'rgba(153, 102, 255, 0.2)',
                            //     'rgba(255, 159, 64, 0.2)',
                            // ],
                            
                            // borderColor: "[
                            //     'rgba(255, 99, 132, 1)',
                            //     'rgba(54, 162, 235, 1)',
                            //     'rgba(255, 206, 86, 1)',
                            //     'rgba(75, 192, 192, 1)',
                            //     'rgba(153, 102, 255, 1)',
                            //     'rgba(255, 159, 64, 1)',
                            // ]",
                            // borderWidth: 1,
                            },
                            // {
                            //   label: 'Quantity',
                            //   data: [47, 52, 67, 58, 9, 50],
                            //   backgroundColor: 'orange',
                            //   borderColor: 'red',
                            // },
                        ],
                        }}
                        
                        options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                            ],
                        },
                        // legend: {
                        //     labels: {
                        //     fontSize: 25,
                        //     },
                        // },
                        }}
                    />
                    </div>


                    <div class="table">
                        <div class="titleDashboard">Prestations à acceptées</div>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Nom</th>
                                <th scope="col">Email</th>
                                <th scope="col">Heure</th>
                                <th scope="col">Numero de telephone</th>
                                <th scope="col">Quartier</th>
                                <th scope="col">Accepter / Refuser</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderItems()}
                                {this.items}
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
            
        </div>
        
    )}
}

export default  Dashboard;