import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Login.css'

export default class Login extends Component {
   constructor(props){
       super(props)
       const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn =false
        }
        
       this.state={
           username:"",
           password:"",
           loggedIn

       }
       this.onChange=this.onChange.bind(this)
       this.submitForm=this.submitForm.bind(this)
       
   }
   onChange(e){
       this.setState({
           [e.target.name]: e.target.value
       })
   }
   submitForm(e){
       e.preventDefault()
       const{username , password} =this.state

       //login here

       if(username==="shray"&& password==="shray"){
        localStorage.setItem("token","qwerty")   
        this.setState({
               loggedIn: true
           })
       }
   }
    render() {
        
        if(this.state.loggedIn){
            // return <Redirect to="/Admin" /> //
            return <Redirect to="/" />
        }
        return (
            <div>
                <img className="logimg" src="https://theuniqueacademy.co.in/assets/images/test.png" alt="login"></img>
                <div className="login-div">
                    <form onSubmit={this.submitForm} >
                    <label type="text">Login</label>
                    <br />
                   <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
                   <br />
                   <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
                   <br />
                   <input type="submit" />
                   
                   </form> 
                   </div>
            </div>
        )
    }
}