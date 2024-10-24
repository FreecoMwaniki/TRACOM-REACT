import React from 'react'
import { useState } from 'react';
import './Footer.css';


export default function Footer() {

  const[userName, setUserName]=useState('TRACOM SOLUTIONS')
      
  // eslint-disable-next-line no-unused-vars
  function changename(){
    
  setUserName('FREECO');
}
  return (
    <div>
      <h2>{userName}</h2>
       {/* <footer className='feet'>
        <div className="footer1">
          <h1>TRACOM SOLUTIONS</h1><br></br>
          <p>  Become a member.</p>
        </div> */}
        {/* <div className="footer"> */}
          {/* <h1>Solutions</h1> */}
          {/* <p>About</p>
          <p>Careers</p>
          <p>Model</p> */}
        {/* </div> */}
      {/* </footer> */}
    </div>
  )
}
