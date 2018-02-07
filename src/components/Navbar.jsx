import About from './About';
import Arts from './Arts';
import Contact from './Contact';
import React from 'react';

function Navbar(){
  return(
    <div>
      <style jsx>{`
        background: salmon;
        display: flex;
        justify-content: space-around;
        padding: 7px;
      `}</style>
      <About />
      <Contact />
      <Arts />
    </div>
  );
}

export default Navbar;
