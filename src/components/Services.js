import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaNode, FaNpm, FaGit } from "react-icons/fa";
import {SiMongodb, SiTailwindcss, SiChakraui, SiNetlify, SiHeroku} from 'react-icons/si'
import './Servicesstyles.css'
const Services = () => {
  return (
 <div className='services'>
     <div className='container-fluid'>
         <div className='content'>
         <h1 className='title'>Services</h1>
         <div className='row'>
            <div className='col-lg-6'>
            
            <h3>Frontend <br/><FaHtml5 className='icon' /> <FaCss3 className='icon' /> <FaReact className='icon'/></h3>
            <p className='just'>Experience with HTML, CSS and ReactJs</p>
            </div>
           
            <div className='col-lg-6'>
            <h3>Backend<br/><FaNode className='icon'/> <SiMongodb className='icon'/></h3> 
            <p className='just'>Experience with NodeJs and MongDB</p>

            </div>
</div>
         </div>
     </div>
 </div>
    )
};

export default Services;
