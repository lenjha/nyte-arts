import React from 'react';
import SearchBar from './SearchBar';
import Login from './Login';

function SearchHeader(){
  return(
    <div>
      <style jsx>{`
        background: salmon;
      `}</style>
      <h2>
        SearchHeader works!
      </h2>
      <SearchBar />
      <Login />
    </div>
  );
}

export default SearchHeader;
