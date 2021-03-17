import React from "react";
import "./App.css"; 
import { AiOutlineSearch } from 'react-icons/ai';
import { IoLocation } from 'react-icons/io5';
import people from "./people.jpg"
import { FcGoogle } from 'react-icons/fc';
import { FcSportsMode } from 'react-icons/fc';
import { FcLibrary } from 'react-icons/fc';
import { FcDribbble } from 'react-icons/fc';
import { FcStackOfPhotos } from 'react-icons/fc';


function App() {
  return (
    <div className="App">
     
  <div className="midllediv">
    
    <div className="tobsite">
      <h4>Jobhunt</h4>
      <button className="button"><h4 style={{color:'white'}}>Login</h4></button>
    </div>
<div style={{height:'79vh',width:'79vw',display:'flex',alignItems:'center'}}>

<div style={{height:'79vh',width:'50vw',}}>
  
<div style={{height:"20vh",width:'15vw',marginLeft:'20px'}}>    <h2>Get hired<br></br>By the popular<br></br>teams.</h2>
</div> 


<div style={{width:'25vw',marginLeft:'20px',marginTop:'-20px'}}><h6>Find job according to your interest simply click on search<br></br>And choose category according your skills</h6></div>
{/* ///////// */}

<div className="searchdiv">
<div className="searchin">
  <div style={{height:'7vh',width:'10vw',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <AiOutlineSearch/>
    <h6> Job tittle or keywords</h6>
  </div>
  <div style={{height:'7vh',width:'5vw',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <IoLocation/>
    <h6>Location</h6>
  </div>
  <button className="buttontwo">Search</button>
</div>

</div>

<h5 style={{marginLeft:'25px'}}>Recent Job Operating</h5>
<div style={{justifyContent:"space-around",display:'flex',width:'12vw',marginLeft:'15px'}}>
<FcGoogle/>
<FcSportsMode/>
<FcLibrary/>
<FcDribbble/>
<FcStackOfPhotos/>
</div>




{/* ///// */}
<img style={{height:'80vh',width:"55vw",marginLeft:'310px',marginTop:'-360px'}} src={people}></img> 

</div>




  
    </div>
        </div> 
      {/* ///last */}
    </div>
  );
}

export default App;
