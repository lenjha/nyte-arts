import About from './About';
import Arts from './Arts';
import Contact from './Contact';
import React from 'react';

function Navbar(){
  return(
    <div>
      <style jsx>{`
        background: salmon;
      `}</style>
      <h2>
        Navbar works!
      </h2>
      <About />
      <Contact />
      <Arts />
    </div>
  );
}

export default Navbar;
