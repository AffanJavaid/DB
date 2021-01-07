import React from 'react';
import {Link ,NavLink} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Select </a>
        <ul className="right">
          <li><Link to ='/Organization'>Organization</Link></li>
          <li><Link to ='/Client'>Client</Link></li>
          <li><Link to ="/Employee">Employee</Link></li> 
          <li><NavLink to ='/Account'>Account</NavLink></li>                                                               
          <li><NavLink to ='/Subdivisions'>Subdivisions</NavLink></li> 
        </ul>
      </div>
    </nav> 
  ) 
}

export default Navbar