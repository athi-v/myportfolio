import React from 'react';
import {Link} from 'react-scroll'
import NewWindow from 'react-new-window'
import './Herostyles.css';
const Hero = () => {
  return (
      <div className='hero'>
          <div className='container-fluid'>
              <div className='content'>
            <h5>Hi, I am</h5>
            <h1>Athenkosi Vinqi</h1>
            <h5>Welcome to my personal portfolio..</h5>
            <h6>Freelance Frontend & Backend Developer</h6>

            <a href='../assets/Quotation_2.pdf' target='_blank'>
<button className='btn btn-primary'>Download CV</button>
</a>            <button className='btn btn-primary'><Link to='contact'>Contact Me</Link></button>


              </div>
          </div>
      </div>
  )
};

export default Hero;
