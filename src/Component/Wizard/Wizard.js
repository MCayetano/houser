import React, { Component } from 'react';
import { Link } from "react-router-dom";



class Wizard extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }







    render(){
        return(
            <div className="wizardOutter">
                <Link to="/Dashboard">
               <h1>Wizard</h1>
               <button>Cancel</button>
               </Link>
               <input>name</input>
               <input>address</input>
               <input>city</input>
               <input>state</input>
               <input>zipcode</input>
            </div>
        )
    }



}


export default Wizard;