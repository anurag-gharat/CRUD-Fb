import React, { Component } from 'react'
import { withRouter, Redirect } from "react-router";
import app from "../base";


export default class Home extends Component {
    render() {
        return (
            <div>
                This is home
                <button onClick={() => app.auth().signOut().then(  
                    {if (currentUser) {
                        console.log(currentUser) 
                    }

                    
                    })}>Sign out</button>
            </div>
        )
    }
}
