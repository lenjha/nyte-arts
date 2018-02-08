import React from 'react';
import SearchBar from './SearchBar';
import Login from './Login';


function SearchHeader(){
  return(
    <div>
      <style jsx>{`
        background: black;
        display: flex;
        justify-content: space-around;
        padding: 1em;
      `}</style>
      <SearchBar />
      <Login />
    </div>
  );
}

export default SearchHeader;
