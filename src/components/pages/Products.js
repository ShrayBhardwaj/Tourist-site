import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

import '../../App.css';
import Footer from '../Footer';


export default class Products extends Component {
  constructor(props){
    super(props)
    const token = localStorage.getItem("token")

    let loggedIn = true
    if(token == null){
        loggedIn =false
    }
    
    this.state ={
        loggedIn
    }
}
  render(){
    if(this.state.loggedIn === false){
      return <Redirect to="/sign-up" />
  }

  return (
  
   <>
   <img src="https://www.ashokleyland.com/documents/1305159/1312286/Contact+us_topbanner_cropped.jpg/97407cec-b0fb-6e71-0062-76d3b367f6d2?t=1523961063566" className="contact-img">
   
      </img>
    <div className='contact-container'>
    <section className='contact-inner '>
      <p className='contact-heading'>
      👋 Let’s do great things.
      </p>
      <p className='contact-heading2'>
      See the details below to contact-us
      </p>
      <p className="contact-num">9023689908<br />Shray2037@gmail.com<br /><br />Any query then mail to this email. We would solve your query</p>
      </section>
      </div>
      <Footer />
      </>

  )}}