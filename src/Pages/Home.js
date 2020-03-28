import React, { Component } from 'react'
import { withRouter, Redirect } from "react-router";
import app from "../base";


export default class Home extends Component {

    render() {

        
        return (
            <div>
                This is home
                <button onClick={() => this.logout()}>Sign out</button>
            </div>
        )
    }
    logout=()=>{
            
        app.auth().signOut()
            

    }

}
