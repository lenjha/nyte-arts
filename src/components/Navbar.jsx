import About from './About';
import Arts from './Arts';
import Contact from './Contact';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

function Navbar(){
  return(
    <div>
      <style jsx>{`
        background: #081933;
        display: flex;
        justify-content: space-around;
        padding: 7px;
      `}</style>
      <Link to ='/about'>About</Link>
      <Contact />
      <Arts />
    </div>
  );
}

export default Navbar;
