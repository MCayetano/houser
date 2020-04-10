import React, { Component } from 'react';
import House from '../House/House';



class Dashboard extends Component {
    constructor() {
        super();
    }







    render(){
        return(
            <div className="dashOutter">
                <h1>Dashboard</h1>
                <button>Add New Property</button>
                <House />
                
            </div>
            
        )
    }



}


export default Dashboard;