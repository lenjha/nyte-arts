import React from 'react';
import SearchHeader from './SearchHeader';
import Navbar from './Navbar';

function Header(){
  return(
    <div>
      <style jsx>{`
        background: darkred;
      `}</style>
      <h1>
        Header works!
      </h1>
      <SearchHeader />
      <Navbar />
    </div>
  );
}

export default Header;
