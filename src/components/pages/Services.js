import React, { useEffect, useState, Component} from 'react';
import '../../App.css';
import Footer from '../Footer';
import axios from 'axios';
import Maphome from '../Maphome';
import { Link, Redirect } from 'react-router-dom'


/*const fetchrandom = () => {
  return (
  axios.get("https://api.geoapify.com/v1/geocode/search?text=${geo}&apiKey=de3f688477c2499dbb3e36f542c13f05")
  .then(({data}) => {
    // handle success
    console.log(data);
    return data;
  })
  .catch(err => {
    // handle error
    console.log(err);
  })
  )
}*/

export default class Services extends Component {
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

//export default function Services() {
  
/*const[geo ,setGeo] = useState("")
  
const [randomdata , setRandomdata] = useState("")

  useEffect(() => {
      fetchrandom().then(random =>{
          setRandomdata( JSON.stringify(random , null , 2) || "no user data");
       });
       
  }, [])

  const onsubmit=(e) =>{
    e.preventDefault();
    fetchrandom();
  };

  const onChange=(e) =>{
   setGeo(e.target.value)
  }*/
 
  return (<div><h1 className='services'>SERVICES</h1>

{/*<p className="p">Hello, Everyone hope you guys are doing very good as well as i hope you like to visit the site,
  Now here you can see and search the place whatever you want to like to search new place
  Tourism and travel-related services include services provided by hotels and restaurants (including catering), 
  travel agencies and tour operator services, tourist guide services and other related services.
   A crucial aspect of trade in tourism services is the cross-border movement of consumers  
  </p>*/}

 


 {/* <form className="search-place" onSubmit={onsubmit}>
    <input className="service-input" type="text" placeholder="search place" autoComplete="off" 
    onChange={onChange}
    value={geo}/>
    <button className="service-btn" type="submit" value="search" >Search</button>
  </form>

  <pre>
     {randomdata}
  </pre>
  
   <ul>
    {}
</ul>*/}


 <Maphome />

  <Footer />
  </div>
  )}}