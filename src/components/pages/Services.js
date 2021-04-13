import React, { useEffect, useState} from 'react';
import '../../App.css';
import Footer from '../Footer';
import axios from 'axios';


const fetchrandom = () => {
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
}

export default function Services() {
  const[geo ,setGeo] = useState("")
  
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
  }
 
  return (<div><h1 className='services'>SERVICES</h1>
  <div className="service-container">
    <div className="service-inner">
  {/*} <p className='p'>Welcome to services, Here we are providing a Tourism and travel-related services include services provided by hotels and restaurants (including catering), 
    travel agencies and tour operator services, tourist guide services and other related services.

  A crucial aspect of trade in tourism services is the cross-border movement of consumers (mode 2).
 This permits a variety of workers, including those in remote areas, to become services exporters — for instance, 
 by guiding tourists, performing in local events, or working in tourist accommodation.
  While digitalisation offers great potential for many aspects of tourism services, 
  the sector continues to depend highly on the cross-border movement of both customers and employees, 
and remains strongly linked to transport services. </p>*/}

  </div>
  </div>

  <form className="search-place" onSubmit={onsubmit}>
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
  </ul>

  <Footer />
  </div>
  )}