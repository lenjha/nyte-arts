import React from 'react';
import FeedAnnouncementList from './FeedAnnouncementList';

function Feed(){
  return(
    <div>
      <style jsx>{`
        h3{
          font-family: 'Bungee Hairline', cursive;
          text-align: center;
          margin: 5px auto;
        }
      `}</style>
      <h3>
        Feed
      </h3>
      <FeedAnnouncementList />
    </div>
  );
}

export default Feed;
