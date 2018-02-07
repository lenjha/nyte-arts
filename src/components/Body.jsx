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
      `}</style>
      <h1>
        Body works!
      </h1>
      <BreakingNews />
      <Articles />
      <FeaturedArtist />
      <TwitterFeed />
    </div>
  );
}

export default Body;
