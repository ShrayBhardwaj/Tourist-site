import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Logout.css'

export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
               <img className="logout" src="https://images-na.ssl-images-amazon.com/images/I/51lULJRQQsL._SL1000_.jpg"></img>
                  <Link className="logoutlink" to="/Login">
                      Login again
                      </Link> 
            </div>
        )
    }
}