import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer'
import Admin from '../Authentication/Admin';



class Home extends Component {
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
      <HeroSection />
      <Cards />
      <Footer />
      <Admin />
    </>
  );
}
}

export default Home;