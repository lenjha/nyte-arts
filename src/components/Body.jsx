import AdSection from './AdSection';
import Articles from './Articles';
import CommunityBoard from './CommunityBoard';
import FeaturedArtist from './FeaturedArtist';
import React from 'react';
import Feed from './Feed';

function Body(){

  return(
    <div>
      <style jsx>{`
        .body-div {
          background: black;
          display: flex;
          flex-direction: row;
          height: auto;
          width: 100%;
          color:white;
        }
      `}</style>

      <AdSection/ >
      <div className="body-div">
        <CommunityBoard />
        <Articles />
        <div style={{display: 'flex', flexDirection: 'column', width: '30%'}}>
          <FeaturedArtist />
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default Body;
