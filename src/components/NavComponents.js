import React from 'react';
import {Link} from 'react-scroll'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import {GrClose} from 'react-icons/gr'
import './Navstyles.css'

const NavComponents = () => {
  return (
<header>
<nav class="navbar navbar-dark navbar-expand-md">
  <div class="container-fluid">
    <Link to='/' className='navbar-brand'>Athen<span className='strikes'>kosi</span></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <RiMenu3Line className='icon' />
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><button className='btn btn-primary'>Contact</button></h5>
        <button type="button" className=" navbar-toggler" data-bs-dismiss="offcanvas" aria-label="Close">
        <RiCloseLine className='icon' />
        </button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <Link to='hero' className='nav-link'>Home</Link>
          </li>
          <li class="nav-item">
            <Link to='about' className='nav-link'>About</Link>

          </li>
          <li class="nav-item">
            <Link to='services' className='nav-link'>Services</Link>
          </li>

          <li class="nav-item">
            <Link to='project' className='nav-link'>Projects</Link>
          </li>

          <li class="nav-item">
            <Link to='contact' className='nav-link'>Contact</Link>
          </li>
        </ul>
      
      </div>
    </div>
  </div>
</nav>
</header>
  )
};

export default NavComponents;
