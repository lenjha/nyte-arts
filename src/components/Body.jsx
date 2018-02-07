import Articles from './Articles';
import BreakingNews from './BreakingNews';
import FeaturedArtist from './FeaturedArtist';
import React from 'react';
import TwitterFeed from './TwitterFeed';

function Body(){
  return(
    <div>
      <style jsx>{`
        background: darkred;
        display: flex;
        flex-direction: row;
        height: 112vh;
        width: 100%;
      `}</style>
      <BreakingNews />
      <Articles />
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <FeaturedArtist />
        <TwitterFeed />
      </div>
    </div>
  );
}

export default Body;
