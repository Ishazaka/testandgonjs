import React from "react";
import { FaUserCircle } from 'react-icons/fa';
 import { IoMdArrowDropdown } from 'react-icons/io';


import logo from '../images/logo.png'

function NavBar() {


  return (
    <>
      <div className="nav-container my-4">
      <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container px-md-5">
    <a className="navbar-brand" href="#">
    <img
               alt="testandGo logo"
              src={logo}
              className='navbar-logo'
              />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#"> Home |</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#"> About |</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#"> Partners |</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#"> Locations |</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#"> Contact US</a>
        </li>

        <li className="nav-item d-flex" >
        <a className="nav-link " href="/">  <FaUserCircle/> </a>
        <a className="nav-link " href="/">  <IoMdArrowDropdown/>  </a>
  
        </li>
      </ul>
    </div>
  </div>
</nav>

       </div>
    </>
  

  );
}

export default NavBar;