import React from 'react';
import searchIcon from '../assets/img/search-icon.png';

function SearchBar(){
  return(
    <div>
      <style jsx>{`
        color: lightgrey;
        display: inline;
        .search-bar {

        }
      `}</style>
      <img style={{filter: 'invert(100%)', width: '21.5px', verticalAlign: 'middle'}} src={searchIcon}/>
      <div className="search-bar">
        <input type='text' placeholder='Search'></input>
      </div>
    </div>
  );
}

export default SearchBar;
