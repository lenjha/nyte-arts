import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

function Navbar(){
  const link={
    textDecoration:'none',
    color:'white'
  };

  return(
    <div>
      <style jsx>{`
        background: #081933;
        display: flex;
        justify-content: space-around;
        padding: 7px;
        a {
          text-decoration: none;
        }
      `}</style>
      <Link style={link} to='/about'>About</Link>
      <Link style={link} to='/contact'>Contact</Link>
      <Link style={link} to='/artwork'>Artwork</Link>
    </div>
  );
}

export default Navbar;
