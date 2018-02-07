import React from 'react';
import SearchBar from './SearchBar';
import Login from './Login';

function SearchHeader(){
  return(
    <div>
      <style jsx>{`
        background: salmon;
        display: flex;
        justify-content: space-around;
      `}</style>
      <SearchBar />
      <Login />
    </div>
  );
}

export default SearchHeader;
