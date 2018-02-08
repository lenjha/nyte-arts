import React from 'react';
import CommunityAnnouncementList from './CommunityAnnouncementList';

function CommunityBoard(){
  return(
    <div >
      <style jsx>{`
        width: 25%;
        h3{
          font-family: 'Bungee Hairline', cursive;
          text-align: center;
          margin: 5px auto;
        }
      `}</style>
      <h3>
        Community Board
      </h3>
      <CommunityAnnouncementList />
    </div>
  );
}

export default CommunityBoard;
