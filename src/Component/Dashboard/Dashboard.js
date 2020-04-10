import React, { Component } from 'react';
import House from '../House/House';
import { Link } from "react-router-dom";



class Dashboard extends Component {
    constructor() {
        super();
    }







    render(){
        return(
            <div className="dashOutter">
                <h1>Dashboard</h1>\
                <Link to="/wizard">
                <button>Add New Property</button>
                <House />
                </Link>
                
            </div>
            
        )
    }



}


export default Dashboard;