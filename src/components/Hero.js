import React from 'react';
import {Link} from 'react-scroll'
import './Herostyles.css';
const Hero = () => {
  return (
      <div className='hero'>
          <div className='container-fluid'>
              <div className='content'>
            <h3>Hi, I am</h3>
            <h1>Athenkosi Vinqi</h1>
            <h3>Welcome to my personal portfolio..</h3>
            <h6>Freelance Frontend & Backend Developer</h6>
            
            <button className='btn btn-primary'>Download CV</button>
            <button className='btn btn-primary'><Link to='contact'>Contact Me</Link></button>
              </div>
          </div>
      </div>
  )
};

export default Hero;
