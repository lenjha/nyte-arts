import React from 'react';
import SearchHeader from './SearchHeader';
import Logo from './Logo';
import Navbar from './Navbar';

function Header(){
  return(
    <div>
      <style jsx>{`
        background: darkred;
        display: flex;
        justify-content: space-between;
        flex-direction column;
      `}</style>
      <SearchHeader />
      <Logo />
      <Navbar />
    </div>
  );
}

export default Header;
