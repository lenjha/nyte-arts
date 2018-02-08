import Articles from './Articles';
import CommunityBoard from './CommunityBoard';
import FeaturedArtist from './FeaturedArtist';
import React from 'react';
import Feed from './Feed';

function Body(){
  return(
    <div>
      <style jsx>{`
        background: black;
        display: flex;
        flex-direction: row;
        height: 112vh;
        width: 100%;
        color:white;

        h3 {
          font-family: 'Bungee Hairline', cursive;
          text-align: center;
          margin: 5px auto;
        }
      `}</style>
      <CommunityBoard />
      <Articles />
      <div style={{display: 'flex', flexDirection: 'column', width: '30%'}}>
        <FeaturedArtist />
        <Feed />
      </div>
    </div>
  );
}

export default Body;
