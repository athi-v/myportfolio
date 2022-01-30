import React from 'react';
import {FaEnvelope} from 'react-icons/fa'
import {IoIosCall} from 'react-icons/io'
import './Contactstyles.css'
const Contact = () => {
  return (
      <div className='contact'>
        <div className='container-fluid'>
            <div className='content'>
                <h1>Contact</h1>
                <div className='row'>
                  <div className='col-lg-6'>
                  <p><IoIosCall className='icon'/></p>
                  <p>(+27)733901637</p>
                  </div>
                  <div className='col-lg-6'>
                  <p><FaEnvelope className='icon'/></p>
                  <p>athenkosvinqi25@gmail.com</p>
                  </div>
                </div>
               
            </div>
        </div>
      </div>
  )
};

export default Contact;
