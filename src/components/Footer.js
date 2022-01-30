import React from 'react';
import {FaRegCopyright} from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
  <footer>
  <div className='container-fluid'>
    <div className='content'>
    <p className='centers'><FaRegCopyright className='icon'/> Copyright 2021 Athenkosi Vinqi.</p>
    <p className='centers'>All Rights Reserved.</p>
    </div>
  </div>
  </footer>
    )
};

export default Footer;
