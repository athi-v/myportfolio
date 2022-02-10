import React from 'react';
import {Link} from 'react-scroll'
import cv from '../assets/Athenkosi_Vinqi_CV.pdf';
// import Animate from 'animate.css-react'
 
import 'animate.css'
import './Herostyles.css';
const Hero = () => {
  return (
      <div className='hero'>
          <div className='container-fluid'>
              <div className='content'>
            <h5>Hi, I am</h5>
           
            
            <h1 class="animate__animated animate__fadeInLeft">Athenkosi Vinqi</h1>
            <h5>Welcome to my personal portfolio..</h5>
            <h6>Freelance Web Developer</h6>

            <a href={cv} target='_blank'>
<button className='btn btn-primary'>Download CV</button>
</a>            <button className='btn btn-primary'><Link to='contact'>Contact Me</Link></button>


              </div>
          </div>
      </div>
  )
};

export default Hero;
